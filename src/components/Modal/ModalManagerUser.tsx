import React, { FC, useState } from "react";
import ButtonClose from "../../assets/imgs/LinksIcons/ButtonClose";
import { Controller, useForm } from "react-hook-form";
import { createUser, createUserSchema } from "../../schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { permissionArray } from "../../types/permissions";
import ButtonSubmit from "../layouts/Users/ButtonSubmit";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { ActionsApi } from "../../types/useQueryApiTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  createEmployeeResetSucess,
  createEmployeeUpdate,
} from "../../data/redux/actions";
import { rootState } from "../../data/redux/reducers";
import ErrorMessage from "../Alerts/ErrorMessage";
import { NavBar } from "../common/Navbar";
import FormInput from "../common/Form/FormInput";
import { Modal } from "../common/Modal";
import { Form } from "../common/Form";
import FormUser from "../layouts/Users/FormManageUser/FormUser";
interface modalProps {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
}

const ModalManagerUser: FC<modalProps> = ({ setModal, modal }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSchema>({
    resolver: yupResolver(createUser),
  });
  // const [email, setEmail] = useState<string>();
  const dispatch = useDispatch();
  const { dispatchAction } = useQueryApi();
  const onSubmit = handleSubmit((data) => {
    dispatchAction({ data, action: ActionsApi.createUser });
  });

  const deleterUser = () => {};

  const { isSucess, message } = useSelector(
    (state: rootState) => state.createEmployee
  );
  if (isSucess) {
    setModal(false);
    dispatch(createEmployeeResetSucess());
  }

  if (modal)
    return (
      <Modal.Content>
        <NavBar.Header>
          <NavBar.Titile text="Criar usuarios" />
          <NavBar.Button onClick={() => setModal(false)} text="fechar" />
        </NavBar.Header>
        <hr className="text-gray mb-2" />

        <FormUser
          control={control}
          error={errors}
          onSubmit={onSubmit}
          register={register}
        />
        <Modal.Button
          style={{ marginTop: "20px" }}
          onSubmit={onSubmit}
          text="Criar usuário"
        />
        <ErrorMessage error={errors} message={message} />
      </Modal.Content>
    );
};

export default ModalManagerUser;
