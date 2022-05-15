import { Group } from "../group/Group";

export type Note = {
  createdAt: Date;
  desc: string;
  dueDate: Date | null;
  group?: Group;
  id: string;
  severity?: "Low" | "Moderate" | "High" | null;
  status?: "ToDo" | "Done";
  title: string;
  updatedAt: Date;
};
