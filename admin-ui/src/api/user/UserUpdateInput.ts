import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string;
  lastName?: string;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: string | null;
  roles?: Array<string>;
  username?: string;
};
