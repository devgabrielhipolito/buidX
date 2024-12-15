import React, { FC, useContext } from "react";
import { ModalProps } from "../../types/modalPropsTypes";
import ButtonClose from "../../assets/imgs/LinksIcons/ButtonClose";
import { createUser, createUserSchema } from "../../schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UserInforUpdate from "../layouts/Users/UserInforUpdate";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { ActionsApi } from "../../types/useQueryApiTypes";
import { useSelector } from "react-redux";
import { rootState } from "../../data/redux/reducers";
import { TableContext } from "../../data/context/TableProvider";

const ModalEditUser = () => {
  const { value, setValue } = useContext(TableContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSchema>({
    resolver: yupResolver(createUser),
    defaultValues: {
      email: value.email,
      name: value.name,
      permission: value.permission,
    },
  });
  const { dispatchAction } = useQueryApi();

  const isSucess = useSelector(
    (state: rootState) => state.createEmployee.isSucess
  );

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleDelete = () => {
    const data = value?._id;
    dispatchAction({ data, action: ActionsApi.deleteUser });
  };

  return (
    <div className="absolute inset-0 w-[400px] h-[350px] bg-black m-auto rounded-md top-20">
      <header className="flex justify-between">
        <h2 className="p-2 text-white font-normal  ">Edite as informações</h2>
        <button onClick={() => setValue({ modal: false, value: null })}>
          <ButtonClose />
        </button>
      </header>

      <UserInforUpdate
        control={control}
        error={errors}
        onSubmit={onSubmit}
        register={register}
        userItem={value}
        defafultValues={{
          email: value.email,
          name: value.name,
          permission: value.permission | "",
        }} 
      />

      <div className=" mt-3 text-center font-semibold text-gray">
        <button
          className="p-2 bg-[#2EA451] w-[100px] rounded-md text-sm "
          onClick={onSubmit}
        >
          Atualizar
        </button>
        <button
          onClick={handleDelete}
          className="p-2 w-[120px] ml-5 bg-red-600 rounded-md text-sm text-white"
        >
          Excluir usuario
        </button>
      </div>
    </div>
  );
};

export default ModalEditUser;
