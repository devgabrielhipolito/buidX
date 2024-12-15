import { FC } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { EditProductinSchema } from "../../../../schemas/createProductionSchema";
import { CarObject } from "../../../../data/types/productionTypes";

interface modalProps {
  carItem: Pick<
    CarObject,
    "_id" | "marca" | "modelo" | "status" | "funcionario" | "supervisor"
  > | null;
  onSubmit: () => void;
  control: Control<EditProductinSchema>;
  register: UseFormRegister<EditProductinSchema>;
  error: FieldErrors<EditProductinSchema>;
}

const CarInforUpdates: FC<modalProps> = ({
  carItem,
  control,
  error,
  onSubmit,
  register,
}) => {
  return (
    <div>
      <label
        className="flex flex-col text-[14px]  p-2 text-gray font-semibold"
        htmlFor=""
      >
        Marca
        <Controller
          name="marca"
          control={control}
          render={() => (
            <input
              {...register("marca")}
              placeholder="Digite a marca"
              className="w-[220px] mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
            />
          )}
        />
      </label>

      <label
        className="flex flex-col text-[14px]  p-2 text-gray font-semibold"
        htmlFor=""
      >
        Modelo
        <Controller
          name="modelo"
          control={control}
          render={() => (
            <input
              {...register("modelo")}
              placeholder="Digite o modelo"
              className="w-[220px] mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
            />
          )}
        />
        <label
          className="flex flex-col text-[14px]  p-1 text-gray font-semibold"
          htmlFor=""
        >
          Status
          <Controller
            name="status"
            control={control}
            render={() => (
              <select
                {...register("status")}
                className="[220px] mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
              >
                <option selected value={carItem?.status}>
                  {carItem?.status}
                </option>
                <option
                  value={
                    !carItem?.status.includes("Concluido")
                      ? "Concluido"
                      : "Em produção"
                  }
                >
                  {!carItem?.status.includes("Concluido")
                    ? "Concluido"
                    : "Em produção"}
                </option>
              </select>
            )}
          />
        </label>
      </label>
    </div>
  );
};

export default CarInforUpdates;
