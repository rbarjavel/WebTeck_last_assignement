import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
