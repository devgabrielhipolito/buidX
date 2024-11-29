import React from "react";
import useLengthProduction from "../../../../data/hooks/useLengthProduction";

const ProductionHeader = () => {
  const { lengthProduction } = useLengthProduction();
  return (
    <p className="text-3xl text-white ">
      {lengthProduction}
      <span className="text-sm text-stone-600">/Produzidos</span>
    </p>
  );
};

export default ProductionHeader;
