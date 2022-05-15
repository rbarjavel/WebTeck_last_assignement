import { Note } from "../note/Note";
import { User } from "../user/User";

export type Group = {
  createdAt: Date;
  id: string;
  name: string;
  notes?: Array<Note>;
  updatedAt: Date;
  users?: Array<User>;
};
