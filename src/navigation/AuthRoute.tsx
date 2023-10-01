import type {ReactNode} from 'react';
import {Harness} from "@harness/Harness";
import {Navigate} from "react-router";
import {CurrentUser} from "@models/login/LoginDTO";

interface Props {
  children?: ReactNode
}

export const AuthRoute = ({children}: Props) => {
  const currentUser: CurrentUser = JSON.parse(localStorage.getItem('userInfo') ?? '{}')

  if (Object.entries(currentUser).length === 0) {
    return <Navigate to="/"/>;
  } else {
    return (
      <Harness>
        {children}
      </Harness>
    )
  }
}
