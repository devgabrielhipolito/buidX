import React, { FC } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { Form } from "../../../common/Form";
import { permissionArray } from "../../../../types/permissions";
import { createUserSchema } from "../../../../schemas/auth";

interface IFormUser {
  onSubmit: () => void;
  control: Control<createUserSchema>;
  register: UseFormRegister<createUserSchema>;
  error: FieldErrors<createUserSchema>;
}

const FormUser: FC<IFormUser> = ({ control, error, onSubmit, register }) => {
  return (
    <Form.Content>
      <Form.Label text="Email">
        <Controller
          name="email"
          control={control}
          render={() => (
            <Form.Input
              {...register("email")}
              type="text"
              placeholder="Digite o email"
            />
          )}
        />
      </Form.Label>

      <Form.Label text="Nome do funcionário">
        <Controller
          name="name"
          control={control}
          render={() => (
            <Form.Input
              {...register("name")}
              type="text"
              placeholder="Digite o nome"
            />
          )}
        />
      </Form.Label>

      <Form.Label text="Senha do usuário">
        <Controller
          name="password"
          control={control}
          render={() => (
            <Form.Input
              {...register("password")}
              type="password"
              placeholder="Digite a senha"
            />
          )}
        />
      </Form.Label>

      <label className="flex flex-col text-[14px] mr-auto w-[200px]  p-1 text-gray font-semibold">
        Tipo de funcionário
        <Controller
          name="permission"
          control={control}
          render={() => (
            <Form.Select {...register("permission")}>
              {permissionArray.map((i) => (
                <Form.Option>{i}</Form.Option>
              ))}
            </Form.Select>
          )}
        />
      </label>
    </Form.Content>
  );
};

export default FormUser;
