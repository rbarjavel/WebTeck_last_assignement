import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  group?: GroupUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
