import React from "react";
import { arrayDate } from "../../../utils/grafico/lengthProduction";

const HeaderDashboard = () => {
  const length = arrayDate.reduce((acc, { quantidade }) => acc + quantidade, 0);
  return (
    <p className="text-3xl text-white ">
      {length}
      <span className="text-sm text-stone-600">/Produzidos</span>
    </p>
  );
};

export default HeaderDashboard;
