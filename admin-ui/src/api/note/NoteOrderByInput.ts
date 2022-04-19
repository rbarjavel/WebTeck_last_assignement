import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  noteId?: SortOrder;
  severity?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
