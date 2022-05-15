import { Group } from "../group/Group";

export type Note = {
  createdAt: Date;
  desc: string;
  dueDate: Date | null;
  group?: Group | null;
  id: string;
  serverity?: Array<"Low" | "Medium" | "High">;
  status?: "ToDo" | "InProgress" | "Done";
  title: string;
  updatedAt: Date;
};
