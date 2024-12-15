export interface ModalProps {
  value: any | null;
  setValue: React.Dispatch<{
    modal: boolean;
    value: null;
  }>;
}
