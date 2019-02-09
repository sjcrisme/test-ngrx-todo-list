export interface Todo {
  id: number;
  status: StatusTodo;
  message: string;
}

export enum StatusTodo {
  Pending,
  Completed,
  Archived
}
