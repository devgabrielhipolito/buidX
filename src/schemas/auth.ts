import * as yup from "yup";

export const authSchema = yup
  .object({
    email: yup.string().email().required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

export type AuthSchema = yup.InferType<typeof authSchema>;
