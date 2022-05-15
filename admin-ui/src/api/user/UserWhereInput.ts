import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  notes?: NoteListRelationFilter;
  profilePicture?: StringNullableFilter;
  username?: StringFilter;
};
