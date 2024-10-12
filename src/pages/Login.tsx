import { memo } from "react";
import ComponentLogin from "../components/Login/ComponentLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Control,
  Controller,
  FieldErrors,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { authSchema, AuthSchema } from "../schemas/auth";
import { useAuthenticationUserMutation } from "../data/redux/RtkQuery";
import { useQueryApi } from "../data/hooks/useQueryApi";
import { ActionsApi } from "../types/useQueryApiTypes";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../data/redux/reducers";
import { authenticationSuccess } from "../data/redux/actions";
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
  const dispatch = useDispatch();
  const user = useSelector(
    (state: rootState) => state.authentication.isAuthenticated
  );
  console.log(user);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatchAction({ data, action: ActionsApi.authentication });
  });

  return (
    <section className="h-screen flex flex-col justify-center  items-center">
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
