import * as yup from "yup";
import {PostDTO} from "@models/post/Post";

export const usePostSchema = () => {
  const schema = yup.object({
    id: yup.number().required(),
    userId: yup.number().required(),
    title: yup.string().required(),
    body: yup.string().required(),
  });

  const defaultValues: PostDTO = {
    userId: 1,
    id: 1,
    title: "",
    body: ""
  }

  return {
    schema,
    defaultValues
  }
}