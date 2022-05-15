import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName: string;
  group?: GroupCreateNestedManyWithoutUsersInput;
  lastName: string;
  password: string;
  profilePicture?: string | null;
  roles: Array<string>;
  username: string;
};
