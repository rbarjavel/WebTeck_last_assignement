import { StringFilter } from "../../util/StringFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  firstName?: StringFilter;
  group?: GroupListRelationFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  notes?: NoteListRelationFilter;
  profilePicture?: StringNullableFilter;
  username?: StringFilter;
};
