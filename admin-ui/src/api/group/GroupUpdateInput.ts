import { UserUpdateManyWithoutGroupsInput } from "./UserUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  name?: string;
  users?: UserUpdateManyWithoutGroupsInput;
};
