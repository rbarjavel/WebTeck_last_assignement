import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NoteWhereInput = {
  dueDate?: DateTimeNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  severity?: StringNullableFilter;
  status?: StringFilter;
  title?: StringFilter;
};
