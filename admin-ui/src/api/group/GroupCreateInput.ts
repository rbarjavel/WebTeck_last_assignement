import { UserCreateNestedManyWithoutGroupsInput } from "./UserCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  name: string;
  users?: UserCreateNestedManyWithoutGroupsInput;
};
