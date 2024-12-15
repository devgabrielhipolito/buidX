import { Children, createContext, ReactNode, useState } from "react";
import { boolean } from "yup";
import { ModalProps } from "../../types/modalPropsTypes";

type TContext = {
  value: { value: any[]; modal?: boolean } | null;
  setValue: React.Dispatch<{ value: any[]; modal?: boolean }>;
};

const TableContext = createContext<ModalProps>({} as ModalProps);

const TableProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<{ value: any[] | null; modal: boolean }>({
    value: null,
    modal: false,
  });

  return (
    <TableContext.Provider value={{ value, setValue }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableProvider, TableContext };
