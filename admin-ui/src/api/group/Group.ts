import { User } from "../user/User";

export type Group = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
