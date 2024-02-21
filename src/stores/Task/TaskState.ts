import { ITask } from "models/task";

export type TaskState = {
  tasks: ITask[];
  setTasks: (by: ITask[]) => void;

  modeOfModal: string;
  setModeOfModal: (by: string) => void;

  showAddEditModal: boolean;
  setShowAddEditModal: (by: boolean) => void;

  selectedTask: ITask | null;
  setSelectedTask: (by: ITask | null) => void;
};
