import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteUpdateInput = {
  desc?: string;
  group?: GroupWhereUniqueInput | null;
  serverity?: "Low" | "Medium" | "High";
  status?: boolean;
  title?: string;
};
