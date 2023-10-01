import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from "@store/store";
import {App} from "./App";
import {SnackbarProvider} from "notistack";

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {
          //
        }),
      },
    };
  },
}));

describe('integration test', () => {
  test('renders learn react link', () => {
    render(
      <SnackbarProvider>
        <Provider store={store}>
          <App/>
        </Provider>
      </SnackbarProvider>
    );
    const element = screen.getByTestId("Title-Logo")
    expect(element).toBeInTheDocument();
  });
});

