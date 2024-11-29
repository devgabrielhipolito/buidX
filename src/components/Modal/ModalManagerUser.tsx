import React, { FC, useState } from "react";
import ButtonReturn from "../../assets/imgs/LinksIcons/ButtonReturn";
import { Controller, useForm } from "react-hook-form";
import { createUser, createUserSchema } from "../../schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { permissionArray } from "../../types/permissions";
import ButtonSubmit from "../layouts/Users/ButtonSubmit";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { ActionsApi } from "../../types/useQueryApiTypes";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, createEmployeeUpdate } from "../../data/redux/actions";
import { rootState } from "../../data/redux/reducers";
import ErrorMessage from "../Alerts/ErrorMessage";
import { NavBar } from "../common/Navbar";
import FormInput from "../common/Form/FormInput";
import { Modal } from "../common/Modal";
import { Form } from "../common/Form";
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
  const [email, setEmail] = useState<string>();

  const { dispatchAction } = useQueryApi();
  const onSubmit = handleSubmit((data) => {
    dispatchAction({ data, action: ActionsApi.createUser });
  });

  const deleterUser = () => {};

  const { isSucess, message } = useSelector(
    (state: rootState) => state.createEmployee
  );
  console.log(errors);
  if (isSucess) {
    setModal(false);
  }

  if (modal)
    return (
      <Modal.Content>
        <NavBar.Header>
          <NavBar.Titile text="Criar usuarios" />
          <NavBar.Button onClick={() => setModal(false)} text="fechar" />
        </NavBar.Header>
        <hr className="text-gray mb-2" />
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
                <select
                  {...register("permission")}
                  className="[220px] mt-1 bg-gray placeholder:font-normal text-sm  h-[40px] rounded-md text-black"
                >
                  {permissionArray.map((i) => (
                    <option>{i}</option>
                  ))}
                </select>
              )}
            />
          </label>
        </Form.Content>
        <ButtonSubmit deleteUser={() => deleterUser()} onSubmit={onSubmit} />
        <ErrorMessage error={errors} message={message} />
      </Modal.Content>
    );
};

export default ModalManagerUser;
