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
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <SelectInput
          source="serverity"
          label="serverity"
          choices={[
            { label: "Low", value: "Low" },
            { label: "Medium", value: "Medium" },
            { label: "High", value: "High" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "ToDo", value: "ToDo" },
            { label: "InProgress", value: "InProgress" },
            { label: "Done", value: "Done" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
