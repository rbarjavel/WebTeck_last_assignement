import { Group } from "../group/Group";

export type Note = {
  createdAt: Date;
  desc: string;
  dueDate: Date | null;
  group?: Group;
  id: string;
  severity: string;
  status: string;
  title: string;
  updatedAt: Date;
};
