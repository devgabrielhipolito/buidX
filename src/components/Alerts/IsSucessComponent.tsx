import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployeeResetSucess } from "../../data/redux/actions";
import { rootState } from "../../data/redux/reducers";

interface SucessProps {
  message: string;
}

const IsSucessComponent: FC<SucessProps> = ({ message }) => {
  const dispatch = useDispatch();
  const isSucess = useSelector(
    (state: rootState) => state.createEmployee.isSucess
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(createEmployeeResetSucess());
    }, 2000);

    return () => clearTimeout(timer);
  });

  if (isSucess)
    return (
      <div className="fixed bottom-10 right-10 w-[300px] text-center bg-white p-6 rounded-lg font-normal border-2 shadow-lg">
        {message}
      </div>
    );
};

export default IsSucessComponent;
