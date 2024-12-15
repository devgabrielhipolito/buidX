import React, { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { ActionsApi } from "../../types/useQueryApiTypes";
import {
  createProduction,
  createProductionSchema,
} from "../../schemas/createProductionSchema";
import CarForm from "../layouts/development/FormCreateProduction/CarForm";
import EmployeeForm from "../layouts/development/FormCreateProduction/EmployeeForm";
import { Modal } from "../common/Modal";
import { NavBar } from "../common/Navbar";
import ButtonClose from "../../assets/imgs/LinksIcons/ButtonClose";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../data/redux/reducers";
import {
  productionResetSuccess,
  productionSuccess,
} from "../../data/redux/actions";
import IsSucessComponent from "../Alerts/IsSucessComponent";

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
    reset,
    formState: { errors },
  } = useForm<createProductionSchema>({
    resolver: yupResolver(createProduction),
  });
  const { dispatchAction } = useQueryApi();
  const dispacth = useDispatch();
  const onsubmit = handleSubmit((data) => {
    dispatchAction({ data, action: ActionsApi.createProduction });
    reset();
  });
  const issucess = useSelector((state: rootState) => state.production.isSucess);
  if (issucess) {
    setModal(false);
    dispacth(productionResetSuccess());
  }

  if (modal)
    return (
      <Modal.Content style={{ width: "600px" }}>
        <NavBar.Header>
          <NavBar.Titile text="Criar uma nova produção" />
          <NavBar.Button
            style={{ backgroundColor: "transparent" }}
            icon={<ButtonClose />}
            onClick={() => setModal(false)}
          />
        </NavBar.Header>
        <div className="flex justify-between mt-2">
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

        <Modal.Button onSubmit={onsubmit} text="Criar produção" />
      </Modal.Content>
    );
};

export default ModalCreateProducion;
