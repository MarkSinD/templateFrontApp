import {ReactElement, useCallback} from 'react'
import {AuthRoute} from "./AuthRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Post, SecondPage} from "@pages/index";
import {CssBaseline} from "@mui/material";
import {Login} from "@pages/login/Login";

export const RouterConfig = () => {
  const getElement = useCallback((Element: ReactElement) => {
    return (
      <AuthRoute>
        {Element}
      </AuthRoute>
    )
  }, []);

  return (
    <BrowserRouter basename="/">
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="first" element={getElement(<Post/>)}/>
        <Route path="second" element={getElement(<SecondPage/>)}/>
      </Routes>
    </BrowserRouter>
  )
}