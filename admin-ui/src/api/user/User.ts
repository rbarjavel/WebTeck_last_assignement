import { Group } from "../group/Group";

export type User = {
  createdAt: Date;
  firstName: string;
  group?: Array<Group>;
  id: string;
  lastName: string;
  profilePicture: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
