import { Group } from "../group/Group";

export type Note = {
  createdAt: Date;
  desc: string;
  dueDate: Date | null;
  group?: Group;
  id: string;
  severity: string | null;
  status: string;
  title: string;
  updatedAt: Date;
};
