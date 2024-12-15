import React, { FC, useEffect, useState } from "react";

interface SucessProps {
  message: string;
  isSucess: boolean;
}

const IsSucessComponent: FC<SucessProps> = ({ message, isSucess }) => {
  const [showMessage, setShowMessage] = useState(false);

  const sucessMessage = () => {
    if (isSucess) {
      setShowMessage(true);
      const time = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  useEffect(() => {
    sucessMessage();
  }, [isSucess]);

  if (!showMessage) return null;
  return (
    <div className="fixed bottom-10 right-10 w-[300px] text-center text-white  bg-green-500 p-6 rounded-lg font-normal border-none shadow-lg">
      {message}
    </div>
  );
};

export default IsSucessComponent;
