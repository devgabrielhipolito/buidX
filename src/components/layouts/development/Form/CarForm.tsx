import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC, memo } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { createProductionSchema } from "../../../../schemas/createProductionSchema";

interface IForm {
  onSubmit: () => void;
  control: Control<createProductionSchema>;
  register: UseFormRegister<createProductionSchema>;
  error: FieldErrors<createProductionSchema>;
}

const CarForm: FC<IForm> = ({ control, error, onSubmit, register }) => {
  return (
    <form className="mt-4   ">
      <p className="text-white">Caracteristicas do carro</p>
      <div className="flex flex-col  mt-4 gap-6  w-[520px] ">
        <label className="" htmlFor="inputMarca">
          <Controller
            name="marca"
            control={control}
            render={() => (
              <div className="flex w-full">
                <span className=" w-[150px] font-semibold text-white ">
                  Marca do carro
                </span>
                <input
                  type="text"
                  className="border-0 rounded-md text-white bg-black placeholder:text-gray-300 font-normal"
                  placeholder="Digite a marca"
                  {...register("marca")}
                />
              </div>
            )}
          />
        </label>
        <label htmlFor="inputMarca">
          <Controller
            name="modelo"
            control={control}
            render={() => (
              <div className="flex w-full ">
                <span className="w-[150px] font-semibold text-white">
                  Modelo do carro
                </span>
                <input
                  type="text"
                  className="border-0 rounded-md text-white bg-black placeholder:text-gray-300   font-normal"
                  placeholder="Digite o modelo"
                  {...register("modelo")}
                />
              </div>
            )}
          />
        </label>

        <label htmlFor="inputPortas">
          <Controller
            name="portas"
            control={control}
            render={() => (
              <div className="flex">
                <span className="w-[150px] font-semibold text-white">
                  Nº de portas
                </span>
                <select
                  {...register("portas", { required: true })}
                  className="border-0 rounded-md text-white bg-black placeholder:text-gray-300   font-normal"
                >
                  <option>2</option>
                  <option>4</option>
                </select>
              </div>
            )}
          />
        </label>

        <label className="" htmlFor="inputCor">
          <Controller
            name="cor"
            control={control}
            render={() => (
              <div className="flex">
                <span className="w-[150px] font-semibold text-white">
                  Cor do carro
                </span>
                <select
                  {...register("cor", { required: true })}
                  className="border-0 rounded-md text-white bg-black placeholder:text-gray-300   font-normal"
                >
                  <option value="Vermelho">Vermelho</option>
                  <option value="Preto">Preto</option>
                  <option value="Azul">Azul</option>
                  <option value="Branco">Branco</option>
                </select>
              </div>
            )}
          />
        </label>
      </div>
    </form>
  );
};

export default memo(CarForm);
