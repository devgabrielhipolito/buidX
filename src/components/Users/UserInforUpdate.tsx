import { FC } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { createUserObject } from "../../data/types/createUserTypes";
import { createUserSchema } from "../../schemas/auth";
import { permissionArray } from "../../types/permissions";

interface modalProps {
  userItem: Pick<
    createUserObject,
    "_id" | "email" | "name" | "permission"
  > | null;
  onSubmit: () => void;
  control: Control<createUserSchema>;
  register: UseFormRegister<createUserSchema>;
  error: FieldErrors<createUserSchema>;
}

const UserInforUpdate: FC<modalProps> = ({
  userItem,
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
          name="email"
          control={control}
          render={() => (
            <input
              {...register("email")}
              placeholder="Digite o email"
              className="w-full mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
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
          name="name"
          control={control}
          render={() => (
            <input
              {...register("name")}
              placeholder="Digite o nome"
              className="w-full mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
            />
          )}
        />
        <label
          className="flex flex-col text-[14px]  p-1 text-gray font-semibold"
          htmlFor=""
        >
          Status
          <Controller
            name="permission"
            control={control}
            render={() => (
              <select
                {...register("permission")}
                className="w-full  mt-1 bg-gray placeholder:font-normal text-sm  h-[35px] rounded-md text-black"
              >
                <option selected value={userItem?.permission}>
                  {userItem?.permission}
                </option>
                {permissionArray
                  .filter((i) => i !== userItem?.permission)
                  .map((permission, key) => (
                    <option value={permission} key={permission}>
                      {permission}
                    </option>
                  ))}
                <option value=""></option>
              </select>
            )}
          />
        </label>
      </label>
    </div>
  );
};

export default UserInforUpdate;
