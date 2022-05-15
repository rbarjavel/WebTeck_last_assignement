import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  notes?: NoteListRelationFilter;
  users?: UserListRelationFilter;
};
