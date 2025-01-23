import { memo } from "react";
import ComponentLogin from "../components/layouts/Login/ComponentLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
} from "react-hook-form";
import { authSchema, AuthSchema } from "../schemas/auth";
import { useQueryApi } from "../data/hooks/useQueryApi";
import { ActionsApi } from "../types/useQueryApiTypes";

const Login = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: yupResolver(authSchema),
  });
  const { dispatchAction, isLoading } = useQueryApi();
  
  const onSubmit = handleSubmit((data) => {
    dispatchAction({ data, action: ActionsApi.authentication });
  });

  return (
    <section className="h-screen   flex flex-col justify-center  items-center">
      <div className="w-[450px] max-sm:w-[90%]">
        <h1 className="text-4xl mb-2">BuildX</h1>
        <p className="mb-5 w-72">
          Entre na sua conta para gerencia suas produções de veículos
        </p>
      </div>
      <ComponentLogin
        error={errors}
        control={control}
        register={register}
        onSubmit={onSubmit}
        isloading={isLoading}
      />
      <a className="mt-5" href="">
        Esqueceu a senha?
      </a>
    </section>
  );
};

export default memo(Login);
