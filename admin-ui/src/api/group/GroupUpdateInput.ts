import { NoteUpdateManyWithoutGroupsInput } from "./NoteUpdateManyWithoutGroupsInput";
import { UserUpdateManyWithoutGroupsInput } from "./UserUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  name?: string;
  notes?: NoteUpdateManyWithoutGroupsInput;
  users?: UserUpdateManyWithoutGroupsInput;
};
