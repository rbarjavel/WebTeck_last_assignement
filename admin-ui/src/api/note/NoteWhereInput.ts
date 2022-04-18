import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteListRelationFilter } from "./NoteListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type NoteWhereInput = {
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  note?: NoteWhereUniqueInput;
  notes?: NoteListRelationFilter;
  owner?: UserListRelationFilter;
  severity?: "Low" | "Moderate" | "High";
  title?: StringFilter;
};
