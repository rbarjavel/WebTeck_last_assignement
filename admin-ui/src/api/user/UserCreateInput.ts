import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName: string;
  lastName: string;
  notes?: NoteCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: string | null;
  roles: Array<string>;
  username: string;
};
