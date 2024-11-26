import { ButtonHTMLAttributes } from "react";

interface NavBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function NavBarButton({ text, ...rest }: NavBarButtonProps) {
  return (
    <button className="bg-white p-2 font-semibold rounded-md text-sm" {...rest}>
      {text}
    </button>
  );
}
