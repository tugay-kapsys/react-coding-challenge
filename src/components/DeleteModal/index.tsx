import Button from "../Button";
import Modal from "../Modal";
import "./style.scss";

type DeleteModalProps = {
  setShowDeleteModal: (by: boolean) => void;
  handleDeleteTask: () => void;
};

const DeleteModal = ({
  setShowDeleteModal,
  handleDeleteTask,
}: DeleteModalProps) => {
  return (
    <Modal>
      <div className="delete-modal">
        <p>Are you sure you want to delete this task?</p>
        <div className="delete-modal__actions">
          <Button title="Delete" onClick={handleDeleteTask} />
          <Button
            title="Cancel"
            outline
            onClick={() => setShowDeleteModal(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
