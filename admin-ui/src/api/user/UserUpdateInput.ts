import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: string | null;
  roles?: Array<string>;
  username?: string;
};
