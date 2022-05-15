import { Group } from "../group/Group";
import { User } from "../user/User";

export type Note = {
  createdAt: Date;
  desc: string;
  dueDate: Date | null;
  group?: Group | null;
  id: string;
  note?: Note | null;
  notes?: Array<Note>;
  owner?: Array<User>;
  severity?: "Low" | "Moderate" | "High" | null;
  status?: "ToDo" | "Done" | null;
  title: string;
  updatedAt: Date;
};
