import React, { FC } from "react";

interface AlertProps {
  message: string;
}

const AlertComponent: FC<AlertProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default AlertComponent;
