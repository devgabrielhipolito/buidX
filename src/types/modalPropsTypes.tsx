export interface ModalProps {
  value: any | null;
  setModal: React.Dispatch<{
    modal: boolean;
    value: null;
  }>;
}
