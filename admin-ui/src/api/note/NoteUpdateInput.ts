import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteUpdateInput = {
  desc?: string;
  dueDate?: Date | null;
  group?: GroupWhereUniqueInput;
  severity?: string;
  status?: string;
  title?: string;
};
