export interface ModalProps {
  data: any| null;
  setData: React.Dispatch<{
    modal: boolean;
    value: null;
  }>;
}
