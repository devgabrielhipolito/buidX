import { memo } from "react";
import ComponentLogin from "../components/Login/ComponentLogin";

const Login = () => {
  return (
    <section className="  h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl mb-2">BuildX</h1>
        <p className="mb-5 w-72">
          Entre na sua conta para gerencia suas produções de veículos
        </p>
        <ComponentLogin />
      </div>
    </section>
  );
};

export default memo(Login);
