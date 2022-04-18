import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteWhereInput = {
  desc?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  userId?: UserWhereUniqueInput;
};
