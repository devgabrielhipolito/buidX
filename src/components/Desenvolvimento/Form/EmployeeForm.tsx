import React, { FC, useRef, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { createProductionSchema } from "../../../schemas/createProductionSchema";

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
    <form className="mt-4   ">
      <p className="text-white">Grupo responsavel</p>
      <div className="mt-4 flex  flex-wrap">
        <label htmlFor="inputSupervisor">
          <Controller
            name="supervisor"
            control={control}
            render={() => (
              <select
                {...register("supervisor", { required: true })}
                className="border-0 rounded-md text-white bg-black placeholder:text-gray-300 font-normal"
              >
                <option>Selecionar um supervisor</option>
                <option>Supervisor 2</option>
                <option>Supervisor 3</option>
              </select>
            )}
          />
        </label>
        <label className=" ml-10  " htmlFor="inputSupervisor">
          <Controller
            name="funcionario"
            control={control}
            render={() => (
              <span className=" p-[10px] self-end flex flex-col rounded-md text-white bg-black placeholder:text-gray-300 font-normal">
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
        </label>
        <label htmlFor="date">
          <Controller
            name="prazo"
            control={control}
            render={() => (
              <>
                <p className="text-white mb-2">Prazo de entrega</p>
                <input
                  {...register("prazo")}
                  className="border-0 rounded-md text-white bg-black cal placeholder:text-gray-300 font-norm"
                  type="date"
                  ref={dataref}
                  name="date"
                  onChange={handleFormatDate}
                />
              </>
            )}
          />
        </label>
      </div>
    </form>
  );
};

export default EmployeeForm;
