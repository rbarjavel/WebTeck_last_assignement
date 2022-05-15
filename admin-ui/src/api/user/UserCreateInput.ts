import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";
import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName: string;
  group?: GroupCreateNestedManyWithoutUsersInput;
  lastName: string;
  notes?: NoteCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: string | null;
  roles: Array<string>;
  username: string;
};
