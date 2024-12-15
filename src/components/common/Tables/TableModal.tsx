import React, { FC, ReactElement, useContext } from "react";
import { TableContext } from "../../../data/context/TableProvider";
import { ModalProps } from "../../../types/modalPropsTypes";
interface TableModalProps {
  ModalElement: FC;
}
export function TableModal({ ModalElement }: TableModalProps) {
  const { value, setValue } = useContext(TableContext);
  console.log(value.modal);
  return <>{value.modal && <ModalElement />}</>;
}
