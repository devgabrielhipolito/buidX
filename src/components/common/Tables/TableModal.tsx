import { FC, useContext } from "react";
import { TableContext } from "../../../data/context/TableProvider";
interface TableModalProps {
  ModalElement: FC;
}
export function TableModal({ ModalElement }: TableModalProps) {
  const { data, setData } = useContext(TableContext);
  return <>{data.modal && <ModalElement />}</>;
}
