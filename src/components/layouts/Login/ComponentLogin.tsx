import { memo } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

interface ComponentLoginProps {
  onSubmit: () => void;
  isloading: boolean;
  control: Control<{
    email: string;
    password: string;
  }>;
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;

  error: FieldErrors<{
    email: string;
    password: string;
  }>;
}

const ComponentLogin: React.FC<ComponentLoginProps> = ({
  register,
  onSubmit,
  control,
  error,
  isloading,
}) => {
  return (
    <form className="w-[450px] max-sm:w-[90%]" action="">
      <div>
        <label htmlFor="input-email">
          <p className="text-sm font-semibold mb-3">Seu email</p>
          <Controller
            name="email"
            control={control}
            render={() => (
              <input
                className={`w-full h-12 rounded-md  focus:border-black ${
                  error.email ? "border-red-500" : ""
                } focus:ring-0`}
                {...register("email")}
                type="text"
                placeholder={error.email ? error.email.message : "Email"}
              />
            )}
          />
        </label>
      </div>
      <div className="mt-5 w-full   ">
        <label htmlFor="password">
          <p className="font-semibold  text-sm mb-3"> Sua senha</p>
          <Controller
            name="password"
            control={control}
            render={() => (
              <input
                className={`w-full font-sanfrancisco-normal h-12 rounded-md  focus:border-black ${
                  error.email ? "border-red-500" : ""
                } focus:ring-0`}
                {...register("password")}
                type="text"
                placeholder={
                  error.password ? error.password.message : "Digite sua senha"
                }
              />
            )}
          />
        </label>
      </div>
      <button
        onClick={onSubmit}
        disabled={isloading}
        className=" w-full  text-white bg-black hover:bg-gray-black mt-5 p-2 text-center  rounded-md   "
      >
        {(isloading && "carregando") || "Login"}
      </button>
    </form>
  );
};

export default memo(ComponentLogin);
