import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteCreateInput = {
  desc: string;
  dueDate?: Date | null;
  group?: GroupWhereUniqueInput | null;
  serverity: "Low" | "Medium" | "High";
  status: "ToDo" | "InProgress" | "Done";
  title: string;
};
