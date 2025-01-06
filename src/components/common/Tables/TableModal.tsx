import React, { FC, ReactElement, useContext } from "react";
import { TableContext } from "../../../data/context/TableProvider";
import { ModalProps } from "../../../types/modalPropsTypes";
interface TableModalProps {
  ModalElement: FC;
}
export function TableModal({ ModalElement }: TableModalProps) {
  const { data, setData } = useContext(TableContext);
  return <>{data.modal && <ModalElement />}</>;
}
