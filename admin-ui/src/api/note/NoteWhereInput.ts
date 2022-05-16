import { StringFilter } from "../../util/StringFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";

export type NoteWhereInput = {
  desc?: StringFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  serverity?: "Low" | "Medium" | "High";
  status?: BooleanFilter;
  title?: StringFilter;
};
