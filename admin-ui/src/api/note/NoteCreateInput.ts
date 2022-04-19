import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteCreateNestedManyWithoutNotesInput } from "./NoteCreateNestedManyWithoutNotesInput";
import { UserCreateNestedManyWithoutNotesInput } from "./UserCreateNestedManyWithoutNotesInput";

export type NoteCreateInput = {
  desc: string;
  dueDate?: Date | null;
  note?: NoteWhereUniqueInput | null;
  notes?: NoteCreateNestedManyWithoutNotesInput;
  owner?: UserCreateNestedManyWithoutNotesInput;
  severity?: "Low" | "Moderate" | "High" | null;
  status?: "ToDo" | "Done" | null;
  title: string;
};
