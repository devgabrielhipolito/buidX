import React, { FC, useRef, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { createProductionSchema } from "../../../../schemas/createProductionSchema";
import { Form } from "../../../common/Form";

interface IEmployeeForm {
  onSubmit: () => void;
  control: Control<createProductionSchema>;
  register: UseFormRegister<createProductionSchema>;
  setValue: UseFormSetValue<createProductionSchema>;
  watch: UseFormWatch<createProductionSchema>;
  error: FieldErrors<createProductionSchema>;
}

const EmployeeForm: FC<IEmployeeForm> = ({
  control,
  error,
  onSubmit,
  setValue,
  watch,
  register,
}) => {
  const dataref = useRef<HTMLInputElement | null>(null);
  console.log(watch());
  const handleFormatDate = () => {
    if (dataref.current) {
      const dataValue = dataref.current.value;
      const convertData = dataValue.split("-");
      const formattedData = convertData.reverse().join("/");
      setValue("prazo", formattedData);
    }
  };
  return (
    <Form.Content>
      <p className="text-white">Grupo responsavel</p>
      <Form.Label>
        <Controller
          name="supervisor"
          control={control}
          render={() => (
            <Form.Select {...register("supervisor", { required: true })}>
              <Form.Option>Selecionar um supervisor</Form.Option>
              <Form.Option>Supervisor 2</Form.Option>
              <Form.Option>Supervisor 3</Form.Option>
            </Form.Select>
          )}
        />
      </Form.Label>
      <Form.Label text="">
        <Controller
          name="funcionario"
          control={control}
          render={() => (
            <span className=" w-full p-[10px] self-end flex flex-col rounded-md text-white bg-black placeholder:text-gray-300 font-normal">
              Selecionar os funcionarios
              <ul className="mt-2">
                <li className="mt-2">
                  <input
                    {...register("funcionario")}
                    type="checkbox"
                    value="Gabriel"
                  />
                  <span className="ml-1 text-gray text-sm">
                    Gabriel Hipolito
                  </span>
                </li>
                <li className="mt-">
                  <input
                    {...register("funcionario")}
                    type="checkbox"
                    value={"marcos"}
                  />
                  <span className="ml-1 text-gray text-sm">Marcos Souza</span>
                </li>
              </ul>
            </span>
          )}
        />
      </Form.Label>
      <Form.Label>
        <Controller
          name="prazo"
          control={control}
          render={() => (
            <>
              <Form.Input
                {...register("prazo")}
                type="date"
                ref={dataref}
                name="date"
                onChange={handleFormatDate}
              />
            </>
          )}
        />
      </Form.Label>
    </Form.Content>
  );
};

export default EmployeeForm;
