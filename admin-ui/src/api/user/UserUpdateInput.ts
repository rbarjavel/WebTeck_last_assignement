import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string;
  group?: GroupWhereUniqueInput | null;
  lastName?: string;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: string | null;
  roles?: Array<string>;
  username?: string;
};
