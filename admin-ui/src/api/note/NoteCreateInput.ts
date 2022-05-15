import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteCreateInput = {
  desc: string;
  dueDate?: Date | null;
  group: GroupWhereUniqueInput;
  severity?: string | null;
  status: string;
  title: string;
};
