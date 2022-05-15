import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteUpdateManyWithoutNotesInput } from "./NoteUpdateManyWithoutNotesInput";
import { UserUpdateManyWithoutNotesInput } from "./UserUpdateManyWithoutNotesInput";

export type NoteUpdateInput = {
  desc?: string;
  dueDate?: Date | null;
  group?: GroupWhereUniqueInput | null;
  note?: NoteWhereUniqueInput | null;
  notes?: NoteUpdateManyWithoutNotesInput;
  owner?: UserUpdateManyWithoutNotesInput;
  severity?: "Low" | "Moderate" | "High" | null;
  status?: "ToDo" | "Done" | null;
  title?: string;
};
