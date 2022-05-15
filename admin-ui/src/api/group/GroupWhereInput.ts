import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
