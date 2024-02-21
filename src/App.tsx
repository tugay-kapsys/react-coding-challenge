import { ModalStatus } from "models/task";
import { useTaskStore } from "stores/Task";
import "./App.scss";
import { ReactComponent as Add } from "./assets/icons/add.svg";
import AddEditTaskForm from "./components/AddEditTaskForm";
import Button from "./components/Button";
import TaskCard from "./components/TaskCard";

const App = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const showAddEditModal = useTaskStore((state) => state.showAddEditModal);

  const handleShowAddTaskModal = () => {
    useTaskStore.getState().setShowAddEditModal(true);
    useTaskStore.getState().setModeOfModal(ModalStatus.ADD);
  };

  return (
    <div className="container">
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
          <Button
            title="Add Task"
            icon={<Add />}
            onClick={handleShowAddTaskModal}
          />
        </div>
        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskForm />}
    </div>
  );
};

export default App;
