import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteCreateInput = {
  desc: string;
  group?: GroupWhereUniqueInput | null;
  serverity: "Low" | "Medium" | "High";
  status: boolean;
  title: string;
};
