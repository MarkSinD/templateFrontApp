import {memo, useCallback} from "react";
import {Button, Card as MuiCard, CardActions, CardContent, CardHeader as MuiCardHeader, Typography} from "@mui/material";
import {FormProvider, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useTranslation} from "react-i18next";
import {useLoginSchema} from "@pages/login/useLoginSchema";
import {CurrentUser, LoginDTO} from "@models/login/LoginDTO";
import {FormTextField} from "@atoms/FormTextField";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router";
import {useLoginMutation} from "@api/security/securityApi";
import {useSnackbar} from "@harness/snackbar";

const CardHeader = styled(MuiCardHeader)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}))

const Card = styled(MuiCard)(() => ({
  margin: "15% auto 0 auto",
  width: "400px",
}))

export const Login = memo(() => {
  const {schema, defaultValues} = useLoginSchema()
  const [loginRequest] = useLoginMutation()
  const {showSuccess, showError} = useSnackbar()
  const {t} = useTranslation()
  const navigate = useNavigate();

  const methods = useForm<LoginDTO>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })

  const saveUserInfoAndNavigate = useCallback(() => {
    const user: CurrentUser = {
      login: "Ivan",
      email: "ivan@mail.com",
      fullName: "Ivan Ivanovich"
    }
    const userInfo = JSON.stringify(user)
    if (userInfo) {
      localStorage.setItem("userInfo", userInfo);
      showSuccess(t("welcome", { ns: 'snackbar' }))
      navigate("/first")
      return userInfo;
    }
    else {
      showError(t('technicalError', { ns: 'snackbar' }));
    }
  }, []);

  const onSubmitSuccessful: SubmitHandler<LoginDTO> = useCallback((data) => {
    /*loginRequest(data)
      .unwrap()
      .then(saveUserInfoAndNavigate)
      .catch(() => showError(`${t('authorizationError', { ns: 'snackbar' })}`))*/
    saveUserInfoAndNavigate("Ivan")
  }, []);

  const onSubmitError: SubmitErrorHandler<LoginDTO> = useCallback(() => {
    showError(t('requiredFieldsFilled'))
  }, []);

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" noWrap sx={{
            color: (theme) => theme.palette.primary.contrastText,
          }}>
            {t('welcome', { ns: 'main' })}
          </Typography>
        }
      />
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmitSuccessful, onSubmitError)}>
          <CardContent>
            <FormTextField
              name={"login"}
              label={"Логин"}
              dataTestId={"form_login"}
              placeholder={"Введите имя пользователя"}
              sx={{width: "100%"}}
            />
            <FormTextField
              name={"password"}
              label={"Пароль"}
              dataTestId={"form_password"}
              placeholder={"Введите пароль"}
              htmlType={"password"}
              sx={{width: "100%"}}
            />
          </CardContent>
          <CardActions
            sx={{justifyContent: "center"}}
          >
            <Button name="enter" variant="contained" color="primary" size="large" type="submit" disabled={false}>
              {t('enter', { ns: 'main' })}
            </Button>
          </CardActions>
        </form>
      </FormProvider>
    </Card>
  );
});

Login.displayName = "Login";
