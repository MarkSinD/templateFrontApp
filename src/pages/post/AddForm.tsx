import {FormTextField} from '@atoms/FormTextField';
import {Box as MuiBox, Button} from "@mui/material";
import {memo} from "react";
import {useTranslation} from "react-i18next";
import {styled} from "@mui/material/styles";

const Box = styled(MuiBox)(({theme}) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: theme.spacing(4),
  alignItems: "center"
}))

export const AddForm = memo(() => {
  const {t} = useTranslation("main")

  return (
    <Box>
      <FormTextField
        name={"id"}
        label={"id"}
        placeholder={"id"}
        dataTestId={"form-id"}
      />
      <FormTextField
        name={"userId"}
        label={"userId"}
        placeholder={"userId"}
        dataTestId={"form-userId"}
      />
      <FormTextField
        name={"title"}
        label={"title"}
        placeholder={"title"}
        dataTestId={"form-title"}
      />
      <FormTextField
        name={"body"}
        label={"body"}
        placeholder={"body"}
        dataTestId={"form-body"}
      />
      <Button
        type={"submit"}
        data-testid={"Submit-Button"}
      >{t('add')}</Button>
    </Box>
  )
})

AddForm.displayName = "AddForm"