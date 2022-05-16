import { Group } from "../group/Group";

export type Note = {
  createdAt: Date;
  desc: string;
  group?: Group | null;
  id: string;
  serverity?: "Low" | "Medium" | "High";
  status: boolean;
  title: string;
  updatedAt: Date;
};
