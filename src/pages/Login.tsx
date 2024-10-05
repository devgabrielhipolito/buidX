import { memo } from "react";
import ComponentLogin from "../components/Login/ComponentLogin";

const Login = () => {
  return (
    <section className="">
      <section className="sm:mx-auto  sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </section>
      <ComponentLogin />
    </section>
  );
};

export default memo(Login);
