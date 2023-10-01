import * as yup from "yup";
import {LoginDTO} from "@models/login/LoginDTO";

export const useLoginSchema = () => {
  const schema = yup.object({
    login: yup.string().required(),
    password: yup.string().required(),
  });

  const defaultValues: LoginDTO = {
    login: "",
    password: ""
  }

  return {
    schema,
    defaultValues
  }
}