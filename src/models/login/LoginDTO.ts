export interface LoginDTO {
  login: string,
  password: string,
}

export interface CurrentUser {
  login: string,
  email: string,
  fullName: string
}

export const emptyCurrentUser: CurrentUser = {
  login: "",
  email: "",
  fullName: ""
}