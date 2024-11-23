import React, { FC } from "react";
import { EditProductinSchema } from "../../schemas/createProductionSchema";
import { FieldErrors } from "react-hook-form";
import { object } from "yup";

interface ErrorProps {
  error: FieldErrors;
  message: string;
}

const ErrorMessage: FC<ErrorProps> = ({ error, message }) => {
  const fieldError = Object.values(error).shift()?.message as string;

  if (fieldError || message)
    return (
      <>
        <p className="text-white m-auto mt-7 bg-red-500 w-56 text-sm text-center p-1 rounded-sm">
          {fieldError || message}
        </p>
      </>
    );
  return null;
};

export default ErrorMessage;
