import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  dueDate?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  noteId?: SortOrder;
  severity?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
