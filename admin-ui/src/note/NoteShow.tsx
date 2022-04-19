import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { NOTE_TITLE_FIELD } from "./NoteTitle";

export const NoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Desc" source="desc" />
        <TextField label="Due date" source="dueDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Note" source="note.id" reference="Note">
          <TextField source={NOTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Severity" source="severity" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Note" target="NoteId" label="Notes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Desc" source="desc" />
            <TextField label="Due date" source="dueDate" />
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
      </SimpleShowLayout>
    </Show>
  );
};
