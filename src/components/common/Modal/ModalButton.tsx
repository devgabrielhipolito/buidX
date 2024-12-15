import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactElement } from "react";

interface ModalButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  text?: string;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
  onSubmit: () => void;
}
export function ModalButton({
  icon,
  text,
  onSubmit,
  ...rest
}: ModalButtonProps) {
  return (
    <button
      {...rest}
      onClick={onSubmit}
      type="submit"
      className=" p-2 rounded-lg mt-2 bg-gray hover:bg-white transition-colors   "
    >
      {icon ? icon : text}
    </button>
  );
}
