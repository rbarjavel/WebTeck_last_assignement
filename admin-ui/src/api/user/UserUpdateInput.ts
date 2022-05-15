import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string;
  group?: GroupUpdateManyWithoutUsersInput;
  lastName?: string;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: string | null;
  roles?: Array<string>;
  username?: string;
};
