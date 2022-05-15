import { Note } from "../note/Note";

export type User = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  notes?: Array<Note>;
  profilePicture: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
