import {ThemeProvider} from "@mui/material";
import {store} from "@store/store";
import {RouterConfig} from "./navigation";
import {YupProvider} from "@harness/YupProvider";
import {Provider} from "react-redux";
import {SnackbarProvider} from "notistack";
import {snackbarProviderProps} from "@harness/snackbar";
import {memo} from "react";
import {useModeListener} from "@styles/useModeListener";

export const App = memo(() => {
  const theme = useModeListener()

  return (
    <YupProvider>
      <Provider store={store}>
        <SnackbarProvider {...snackbarProviderProps}>
          <ThemeProvider theme={theme}>
            <RouterConfig/>
          </ThemeProvider>
        </SnackbarProvider>
      </Provider>
    </YupProvider>
  );
})

App.displayName = "App"

