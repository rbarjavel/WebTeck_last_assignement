import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  group?: GroupCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
