import { Note } from "../note/Note";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notes?: Array<Note>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
