import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteUpdateInput = {
  desc?: string;
  dueDate?: Date | null;
  group?: GroupWhereUniqueInput;
  severity?: string | null;
  status?: string;
  title?: string;
};
