import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  serverity?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
