import { taskList } from "data/taskList";
import { ITask } from "models/task";
import { create } from "zustand";
import { TaskState } from "./TaskState";

export const useTaskStore = create<TaskState>((set) => ({
  tasks: taskList,
  setTasks: (tasks: ITask[]) =>
    set({
      tasks,
    }),

  modeOfModal: "",
  setModeOfModal: (mode: string) =>
    set({
      modeOfModal: mode,
    }),

  showAddEditModal: false,
  setShowAddEditModal: (showAddEditModal: boolean) =>
    set({
      showAddEditModal,
    }),

  selectedTask: null,
  setSelectedTask: (selectedTask: ITask | null) =>
    set({
      selectedTask,
    }),
}));
