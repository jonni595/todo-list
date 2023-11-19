interface ModalProps {
  isOpen: boolean;
  pushNotification: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, pushNotification }) => {
  return (
    <dialog open={isOpen} className="modal">
      <h2>{pushNotification}</h2>
    </dialog>
  );
};

export { Modal };
