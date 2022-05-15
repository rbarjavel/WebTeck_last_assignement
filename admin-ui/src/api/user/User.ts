import { Group } from "../group/Group";
import { Note } from "../note/Note";

export type User = {
  createdAt: Date;
  firstName: string;
  group?: Array<Group>;
  id: string;
  lastName: string;
  notes?: Array<Note>;
  profilePicture: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
