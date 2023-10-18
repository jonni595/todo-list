interface ModalProps {
  isOpen: boolean;
  showModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, showModal }) => {
  return (
    <dialog open={isOpen} className="modal">
      <h2>Complete the fields</h2>
      <button onClick={showModal}>Close</button>
    </dialog>
  );
};

export default Modal;
