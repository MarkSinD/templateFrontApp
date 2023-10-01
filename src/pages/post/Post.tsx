import {useTranslation} from "react-i18next";
import {usePostSchema} from "@pages/post/usePostSchema";
import {FormProvider, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {PostDTO} from "@models/post/Post";
import {memo, useCallback} from "react";
import {AddForm} from "@pages/post/AddForm";
import {Box as MuiBox} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import {styled} from "@mui/material/styles";
import {useSnackbar} from "@harness/snackbar";
import {PostList} from "@pages/post/PostList";

const List = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: '100%'
}))

export const Post = memo(() => {
  const {t} = useTranslation(['snackbar'])
  const yup = usePostSchema()
  const {showSuccess, showError} = useSnackbar()
  const methods = useForm<PostDTO>({
    resolver: yupResolver(yup.schema),
    defaultValues: yup.defaultValues
  })

  const onSubmitSuccessful: SubmitHandler<PostDTO> = useCallback(() => {
    showSuccess(t('success'))
  }, []);

  const onSubmitError: SubmitErrorHandler<PostDTO> = useCallback(() => {
    showError(t('requiredFieldsFilled'))
  }, []);

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmitSuccessful, onSubmitError)}>
        <AddForm/>
      </form>
      <List>
        <PostList/>
      </List>
    </FormProvider>
  )
})

Post.displayName = "Post"