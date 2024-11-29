import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { ActionsApi } from "../../types/useQueryApiTypes";
import {
  createProduction,
  createProductionSchema,
} from "../../schemas/createProductionSchema";
import ErrorMessage from "../Alerts/ErrorMessage";
import CarForm from "../layouts/development/Form/CarForm";
import EmployeeForm from "../layouts/development/Form/EmployeeForm";
import ButtonSubmit from "../layouts/development/Form/ButtonSubmit";

interface IModal {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
}
const ModalCreateProducion: FC<IModal> = ({ modal, setModal }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<createProductionSchema>({
    resolver: yupResolver(createProduction),
  });
  console.log(errors);
  const { dispatchAction } = useQueryApi();
  const onsubmit = handleSubmit((data) => {
    dispatchAction({ data, action: ActionsApi.createProduction });
  });

  if (modal)
    return (
      <section
        className="absolute bg-gray-500 p-2 rounded-md
      h-[500px] 
      w-full
      flex
      flex-col
      top-16
      "
      >
        <p className="text-white text-lg">Crie uma nova produção</p>
        <div className="flex justify-between">
          <CarForm
            control={control}
            register={register}
            onSubmit={onsubmit}
            error={errors}
          />
          <EmployeeForm
            control={control}
            register={register}
            onSubmit={onsubmit}
            setValue={setValue}
            watch={watch}
            error={errors}
          />
        </div>

        <ButtonSubmit setModal={setModal} onSubmit={onsubmit} />
        {/* <ErrorMessage error={errors} /> */}
      </section>
    );
};

export default ModalCreateProducion;
