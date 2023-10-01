import {useSnackbar as useSnackBarNotistack} from "notistack";
import {ActionClose} from "@harness/snackbar/SnackbarAction";

export const useSnackbar = () => {
  const {enqueueSnackbar} = useSnackBarNotistack();

  const showError = (message: string) => {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant: "error",
      action: ActionClose
    })
  }

  const showSuccess = (message: string) => {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant: "success",
      action: ActionClose
    })
  }

  return {
    showSuccess,
    showError
  }
}

useSnackbar.displayName = "Snackbar"