import classNames from "classnames";
import { ModalStatus, TaskPriority, TaskStatus } from "models/task";
import { useEffect, useState } from "react";
import { useTaskStore } from "stores/Task";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./style.scss";

const AddEditTaskForm = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const modeOfModal = useTaskStore((state) => state.modeOfModal);
  const selectedTask = useTaskStore((state) => state.selectedTask);

  const [task, setTask] = useState({
    id: "",
    title: "",
    priority: TaskPriority.LOW,
    status: TaskStatus.TODO,
    progress: 0,
  });

  useEffect(() => {
    if (modeOfModal === ModalStatus.EDIT && selectedTask) {
      setTask({
        id: selectedTask.id,
        title: selectedTask.title,
        priority: selectedTask.priority as TaskPriority,
        status: selectedTask.status as TaskStatus,
        progress: selectedTask.progress,
      });
    }
  }, []);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      title: event.target.value,
    });
  };

  const handleSelectPriority = (priority: TaskPriority) => {
    setTask({
      ...task,
      priority,
    });
  };

  const handleAddEditTask = (event: any) => {
    event.preventDefault();
    // add task
    if (modeOfModal === ModalStatus.ADD) {
      const newTask = {
        ...task,
        id: new Date().getTime().toString(),
      };
      useTaskStore.getState().setTasks([newTask, ...tasks]);
    } else {
      // edit task
      const updatedTasks = tasks.map((item) => {
        if (item.id === selectedTask?.id) return task;
        return item;
      });
      useTaskStore.getState().setTasks(updatedTasks);
    }

    useTaskStore.getState().setShowAddEditModal(false);
  };

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">
              {modeOfModal === ModalStatus.ADD ? "Add Task" : "Edit Task"}
            </span>
            <Close
              className="cp"
              onClick={() => useTaskStore.getState().setShowAddEditModal(false)}
            />
          </div>
          <Input
            label="Task"
            placeholder="Type your task here..."
            onChange={handleOnChangeInput}
            name="title"
            value={task.title}
          />
          <div className="modal-priority">
            <span>Priority</span>
            <ul className="priority-buttons">
              {Object.values(TaskPriority).map((priority: TaskPriority) => (
                <li
                  key={priority}
                  onClick={() => handleSelectPriority(priority)}
                  className={classNames(
                    priority === task.priority && `${priority}-selected`,
                    priority
                  )}
                >
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button
              title={modeOfModal === ModalStatus.ADD ? "Add" : "Edit"}
              onClick={handleAddEditTask}
              disabled={!task.title.trim()}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddEditTaskForm;
