import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteListRelationFilter } from "./NoteListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type NoteWhereInput = {
  dueDate?: DateTimeNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  note?: NoteWhereUniqueInput;
  notes?: NoteListRelationFilter;
  owner?: UserListRelationFilter;
  severity?: "Low" | "Moderate" | "High";
  status?: "ToDo" | "Done";
  title?: StringFilter;
};
