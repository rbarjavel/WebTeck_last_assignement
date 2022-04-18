import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  notes?: NoteCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: string | null;
  roles: Array<string>;
  username: string;
};
