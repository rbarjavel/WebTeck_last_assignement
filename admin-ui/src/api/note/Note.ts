import { User } from "../user/User";

export type Note = {
  createdAt: Date;
  desc: string;
  dueDate: Date | null;
  id: string;
  title: string;
  updatedAt: Date;
  userId?: User | null;
};
