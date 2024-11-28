import { ButtonHTMLAttributes, ReactElement } from "react";

interface ModalButtonProps {
  icon?: ReactElement;
  text: string;
  rest: ButtonHTMLAttributes<HTMLButtonElement>;
}
export function ModalButton({ icon, text, ...rest }: ModalButtonProps) {
  return <button {...rest}>{icon ? icon : text}</button>;
}
