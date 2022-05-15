import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string;
  group?: GroupUpdateManyWithoutUsersInput;
  lastName?: string;
  password?: string;
  profilePicture?: string | null;
  roles?: Array<string>;
  username?: string;
};
