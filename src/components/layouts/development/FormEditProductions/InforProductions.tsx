import React from "react";

const InforProductions = () => {
  return (
    <div className="ml-auto p-2 flex flex-col">
      <label className="text-gray flex flex flex-col font-semibold" htmlFor="">
        Responsavel
        <input
          className="w-[220px] mt-1 text-white placeholder:font-normal text-sm  h-[35px] rounded-md bg-black"
          type="text"
          disabled
          value={"teste"}
        />
      </label>

      <label
        className="text-[14px] mt-2 flex flex-col text-gray font-semibold "
        htmlFor=""
      >
        Funcionarios
        <select className="mt-1 w-[220px] mt-1 text-white placeholder:font-normal text-sm  h-[35px] rounded-md bg-black">
          <option disabled value="">
            Gabriel
          </option>
          <option disabled value="">
            Marcos
          </option>
        </select>
      </label>
    </div>
  );
};

export default InforProductions;
