export type ITask = {
  id: string;
  title: string;
  priority: TaskPriority | string;
  status: TaskStatus | string;
  progress: number;
};

export enum TaskPriority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export enum TaskStatus {
  TODO = "To Do",
  Done = "Done",
  IN_PROGRESS = "In Progress",
}

export enum ModalStatus {
  ADD = "add",
  EDIT = "edit",
}
