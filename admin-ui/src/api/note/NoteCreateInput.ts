import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteCreateInput = {
  desc: string;
  dueDate?: Date | null;
  title: string;
  userId?: UserWhereUniqueInput | null;
};
