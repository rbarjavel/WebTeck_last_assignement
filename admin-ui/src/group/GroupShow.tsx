import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GROUP_TITLE_FIELD } from "./GroupTitle";
import { NOTE_TITLE_FIELD } from "../note/NoteTitle";

export const GroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Note" target="GroupId" label="Notes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Desc" source="desc" />
            <TextField label="Due date" source="dueDate" />
            <ReferenceField label="group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Note" source="note.id" reference="Note">
              <TextField source={NOTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Severity" source="severity" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="GroupId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <ReferenceField label="group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="ProfilePicture" source="profilePicture" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
