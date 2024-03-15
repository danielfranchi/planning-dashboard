interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FDF5E6] p-4 rounded shadow-lg flex flex-col items-center">
        <p className="mb-4 text-[#435d7d] text-center">
          Are you sure you want to delete this item?
        </p>
        <div className="flex gap-4">
          <button
            className="bg-[#435d7d] text-[#FDF5E6] rounded px-4 py-2 flex-1"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-[#435d7d] text-[#FDF5E6] rounded px-4 py-2 flex-1"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
