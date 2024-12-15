import { ButtonHTMLAttributes, ReactElement } from "react";

interface NavBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  text?: string;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export function NavBarButton({ icon, text, ...rest }: NavBarButtonProps) {
  return (
    <button className="bg-white p-2 font-semibold rounded-md text-sm" {...rest}>
      {icon ? icon : text}
    </button>
  );
}
