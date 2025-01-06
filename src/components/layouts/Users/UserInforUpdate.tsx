import { FC } from "react";
import {
  Control,
  Controller,
  DefaultValues,
  FieldErrors,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { createUserObject } from "../../../data/types/createUserTypes";
import { createUserSchema } from "../../../schemas/auth";
import { permissionArray } from "../../../types/permissions";
import { Form } from "../../common/Form";

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
  const {} = useForm<createUserSchema>({
    defaultValues: {
      email: userItem?.email,
    },
  });

  return (
    <Form.Content>
      <Form.Label text="Email">
        <Controller
          name="email"
          control={control}
          render={() => (
            <Form.Input
              {...register("email")}
              placeholder="Digite o email"
              type="text"
            />
          )}
        />
      </Form.Label>

      <Form.Label text="Nome">
        <Controller
          name="name"
          control={control}
          render={() => (
            <Form.Input
              {...register("name")}
              placeholder="Digite o nome"
              type="text"
            />
          )}
        />
        <Form.Label text="Permissão">
          <Controller
            name="permission"
            control={control}
            render={() => (
              <Form.Select {...register("permission")}>
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
              </Form.Select>
            )}
          />
        </Form.Label>
      </Form.Label>
    </Form.Content>
  );
};

export default UserInforUpdate;
