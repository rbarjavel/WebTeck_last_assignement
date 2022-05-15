import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteCreateInput = {
  desc: string;
  dueDate?: Date | null;
  group: GroupWhereUniqueInput;
  severity?: "Low" | "Moderate" | "High" | null;
  status: "ToDo" | "Done";
  title: string;
};
