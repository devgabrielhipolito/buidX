import * as yup from "yup";

export const authSchema = yup
  .object({
    email: yup.string().email().required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

export const createUser = yup.object({
  email: yup.string().email().required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
  name: yup.string().required("O nome é obrigatório"),
  permission: yup.string().required("Selecione o tipo de funcionário"),
});
export type AuthSchema = yup.InferType<typeof authSchema>;
export type createUserSchema = yup.InferType<typeof createUser>;
