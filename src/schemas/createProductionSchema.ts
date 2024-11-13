import * as yup from "yup";

export const createProduction = yup
  .object({
    marca: yup.string().required("O campo marca é obrigatório"),
    modelo: yup.string().required("O campo modelo é obrigatório"),
    portas: yup.string().required("O campo portas é obrigatório"),
    cor: yup.string().required("O campo cor é obrigatório"),
    supervisor: yup.string().required("O campo supervisor é obrigatório"),
    prazo:yup.string().required("A data do prazo é obrigatoria"),
    funcionario: yup
      .array()
      .min(1, "O campo funcionario é obrigatório")
      .required(),
  })
  .required();

export type createProductionSchema = yup.InferType<typeof createProduction>;
