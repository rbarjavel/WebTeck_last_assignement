import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type NoteWhereInput = {
  dueDate?: DateTimeNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  severity?: StringFilter;
  status?: StringFilter;
  title?: StringFilter;
};
