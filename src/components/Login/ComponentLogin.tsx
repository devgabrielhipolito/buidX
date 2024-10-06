import { memo } from "react";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const ComponentLogin = () => {
  return (
    <section className="">
      <div className="w-[430px] mx-auto max-sm:w-screen max-sm:p-4">
        <form action="">
          <div>
            <label htmlFor="">
              <p className="text-sm font-semibold mb-3">Seu email</p>
              <input
                className=" w-full h-12  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                type="text"
                placeholder="Digite seu email"
              />
            </label>
          </div>
          <div className="mt-5">
            <label className="" htmlFor="">
              <p className="font-semibold font- text-sm mb-3"> Seu password</p>
              <input
                className="w-full h-12 rounded-md  focus:border-dark ring-transparent focus:bg-lightBlue"
                required
                type="text"
                placeholder="Digite seu email"
              />
            </label>
          </div>
          <button className="p-2 text-center  mt-5 w-32 text-white">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(ComponentLogin);
