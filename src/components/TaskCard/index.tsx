import classNames from "classnames";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import CircularProgressBar from "../CircularProgressBar";
import "./style.scss";
import { useState } from "react";
import DeleteModal from "components/DeleteModal";
import { useTaskStore } from "stores/Task";
import { ModalStatus } from "models/task";

const TaskCard = ({ task }: any) => {
  const tasks = useTaskStore((state) => state.tasks);

  const { id, title, priority, status, progress } = task;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteTask = () => {
    useTaskStore.getState().setTasks(tasks.filter((task) => id !== task.id));
  };

  const handleEditTask = () => {
    useTaskStore.getState().setModeOfModal(ModalStatus.EDIT);
    useTaskStore.getState().setShowAddEditModal(true);
    useTaskStore.getState().setSelectedTask(task);
  };

  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Task</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Priority</span>
        <span className={classNames(`${priority}-priority`, "priority")}>
          {priority}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button className="status">{status}</button>
      </div>
      <div className="progress">
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className="actions">
        <EditIcon className="mr-20 cp" onClick={handleEditTask} />
        <DeleteIcon className="cp" onClick={() => setShowDeleteModal(true)} />
      </div>
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
};

export default TaskCard;
