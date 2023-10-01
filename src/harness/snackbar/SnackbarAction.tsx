import type {SnackbarAction, SnackbarKey, SnackbarOrigin} from "notistack";
import {useSnackbar as useSnackBarNotistack} from "notistack";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const snackbarOrigin: SnackbarOrigin = {
  horizontal: "right",
  vertical: "top"
}

export const snackbarProviderProps = {
  autoHideDuration: 3000,
  anchorOrigin: snackbarOrigin,
};

export const ActionClose: SnackbarAction = (snackbarId: SnackbarKey) => {
  const {closeSnackbar} = useSnackBarNotistack();

  return (
    <IconButton
      onClick={() => closeSnackbar(snackbarId)}
      size="large"
      data-testid={`ActionClose-${snackbarId}`}
    >
      <CloseIcon/>
    </IconButton>
  )
}