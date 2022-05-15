import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type NoteWhereInput = {
  desc?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  serverity?: "Low" | "Medium" | "High";
  status?: "ToDo" | "InProgress" | "Done";
  title?: StringFilter;
};
