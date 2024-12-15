import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC, memo } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { createProductionSchema } from "../../../../schemas/createProductionSchema";
import { Form } from "../../../common/Form";

interface IForm {
  onSubmit: () => void;
  control: Control<createProductionSchema>;
  register: UseFormRegister<createProductionSchema>;
  error: FieldErrors<createProductionSchema>;
}

const CarForm: FC<IForm> = ({ control, error, onSubmit, register }) => {
  return (
    <Form.Content style={{ width: "250px" }}>
      <p className="text-white">Caracteristicas do carro</p>
      <Form.Label text="Marca do carro">
        <Controller
          name="marca"
          control={control}
          render={() => (
            <Form.Input
              {...register("marca")}
              type="text"
              placeholder="Digite a marca"
            />
          )}
        />
      </Form.Label>
      <Form.Label text="Modelo do carro">
        <Controller
          name="modelo"
          control={control}
          render={() => (
            <Form.Input placeholder="Digite o modelo" {...register("modelo")} />
          )}
        />
      </Form.Label>
      <Form.Label text="Nº de portas">
        <Controller
          name="portas"
          control={control}
          render={() => (
            <Form.Select
              style={{ width: "80px" }}
              {...register("portas", { required: true })}
            >
              <Form.Option>2</Form.Option>
              <Form.Option>4</Form.Option>
            </Form.Select>
          )}
        />
      </Form.Label>

      <Form.Label text="Cor do carro">
        <Controller
          name="cor"
          control={control}
          render={() => (
            <Form.Select {...register("cor", { required: true })}>
              <Form.Option>Vermelho</Form.Option>
              <Form.Option>Preto</Form.Option>
              <Form.Option>Branco</Form.Option>
              <Form.Option>Prata</Form.Option>
            </Form.Select>
          )}
        />
      </Form.Label>
    </Form.Content>
  );
};

export default memo(CarForm);
