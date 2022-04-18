import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteUpdateInput = {
  desc?: string;
  dueDate?: Date | null;
  title?: string;
  userId?: UserWhereUniqueInput | null;
};
