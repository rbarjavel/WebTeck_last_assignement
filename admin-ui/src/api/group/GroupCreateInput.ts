import { NoteCreateNestedManyWithoutGroupsInput } from "./NoteCreateNestedManyWithoutGroupsInput";
import { UserCreateNestedManyWithoutGroupsInput } from "./UserCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  name: string;
  notes?: NoteCreateNestedManyWithoutGroupsInput;
  users?: UserCreateNestedManyWithoutGroupsInput;
};
