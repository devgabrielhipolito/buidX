import React, { FC } from "react";
import ButtonReturn from "../../assets/imgs/LinksIcons/ButtonReturn";
import {
  Control,
  Controller,
  FieldErrors,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { createUser, createUserSchema } from "../../schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { permissionArray } from "../../types/permissions";
interface modalProps {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
}

const ModalManagerUser: FC<modalProps> = ({ setModal, modal }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<createUserSchema>({
    resolver: yupResolver(createUser),
  });

  if (modal)
    return (
      <section
        className="mt-10 bg-gray-500  p-2 rounded-md
      h-[500px] 
      w-[470px]
      flex
      inset-0
      m-auto
      p-4
      flex-col
      "
      >
        <div>
          <header className="flex w-full justify-between">
            <h2 className="p-2 text-gray font-semibold ">Criar usuarios</h2>
            <button onClick={() => setModal(false)}>
              <ButtonReturn />
            </button>
          </header>
          <hr className="text-gray mb-2" />
          <div className="flex  justify-center text-sm font-light flex-col items-left">
            <label
              className=" w-[300px] flex flex-col mb-2 m-1 text-gray"
              htmlFor=""
            >
              Email
              <Controller
                name="email"
                control={control}
                render={() => (
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Digite o email"
                    className="  bg-gray mb-2 placeholder:font-normal text-sm  h-[40px] rounded-md text-black"
                  />
                )}
              />
            </label>

            <label
              className="flex w-[300px] flex-col mb-2 text-gray"
              htmlFor=""
            >
              Nome do usuário
              <Controller
                name="name"
                control={control}
                render={() => (
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Digite o nome"
                    className=" mt-1 bg-gray placeholder:font-normal text-sm  h-[40px] rounded-md text-black"
                  />
                )}
              />
            </label>

            <label
              className="flex w-[300px] flex-col mb-2 text-gray"
              htmlFor=""
            >
              Email
              <Controller
                name="email"
                control={control}
                render={() => (
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Digite o email"
                    className=" mt-1 mb-2 bg-gray placeholder:font-normal text-sm  h-[40px] rounded-md text-black"
                  />
                )}
              />
            </label>

            <label className="flex w-[300px] flex-col  text-gray" htmlFor="">
              Senha do usuário
              <Controller
                name="password"
                control={control}
                render={() => (
                  <input
                    {...register("password")}
                    type="text"
                    placeholder="Digite o email"
                    className=" mt-1 bg-gray placeholder:font-normal text-sm  h-[40px] rounded-md text-black"
                  />
                )}
              />
            </label>

            <label className="flex flex-col text-[14px] mr-auto w-[200px]  p-1 text-gray font-semibold">
              Tipo de funcionário
              <Controller
                name="permission"
                control={control}
                render={() => (
                  <select className="[220px] mt-1 bg-gray placeholder:font-normal text-sm  h-[40px] rounded-md text-black">
                    {permissionArray.map((i) => (
                      <option>{i}</option>
                    ))}
                  </select>
                )}
              />
            </label>
          </div>
        </div>
      </section>
    );
};

export default ModalManagerUser;
