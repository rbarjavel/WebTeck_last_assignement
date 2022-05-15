import { StringFilter } from "../../util/StringFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  firstName?: StringFilter;
  group?: GroupListRelationFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  profilePicture?: StringNullableFilter;
  username?: StringFilter;
};
