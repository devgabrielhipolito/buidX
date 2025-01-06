import { Children, createContext, ReactNode, useState } from "react";
import { boolean } from "yup";
import { ModalProps } from "../../types/modalPropsTypes";

const TableContext = createContext<ModalProps>({} as ModalProps);

const TableProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<{ value: any[] | null; modal: boolean }>({
    value: null,
    modal: false,
  });

  return (
    <TableContext.Provider value={{ data, setData }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableProvider, TableContext };
