import { Group } from "../group/Group";
import { Note } from "../note/Note";

export type User = {
  createdAt: Date;
  firstName: string;
  group?: Group | null;
  id: string;
  lastName: string;
  notes?: Array<Note>;
  profilePicture: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
