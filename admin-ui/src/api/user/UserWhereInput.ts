import { StringFilter } from "../../util/StringFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  firstName?: StringFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringFilter;
  notes?: NoteListRelationFilter;
  profilePicture?: StringNullableFilter;
  username?: StringFilter;
};
