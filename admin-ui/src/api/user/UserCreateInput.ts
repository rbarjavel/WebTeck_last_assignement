import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName: string;
  group?: GroupWhereUniqueInput | null;
  lastName: string;
  notes?: NoteCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: string | null;
  roles: Array<string>;
  username: string;
};
