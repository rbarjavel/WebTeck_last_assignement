import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteUpdateInput = {
  desc?: string;
  dueDate?: Date | null;
  group?: GroupWhereUniqueInput | null;
  serverity?: Array<"Low" | "Medium" | "High">;
  status?: "ToDo" | "InProgress" | "Done";
  title?: string;
};
