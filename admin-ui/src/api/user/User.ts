import { Group } from "../group/Group";

export type User = {
  createdAt: Date;
  firstName: string | null;
  group?: Array<Group>;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
