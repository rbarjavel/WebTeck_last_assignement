import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteCreateInput = {
  desc: string;
  dueDate?: Date | null;
  group: GroupWhereUniqueInput;
  severity: string;
  status: string;
  title: string;
};
