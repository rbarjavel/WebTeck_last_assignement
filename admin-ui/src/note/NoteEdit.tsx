import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GroupTitle } from "../group/GroupTitle";

export const NoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Desc" multiline source="desc" />
        <DateTimeInput label="Due date" source="dueDate" />
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <TextInput label="Severity" source="severity" />
        <TextInput label="Status" source="status" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
