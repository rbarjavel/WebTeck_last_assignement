import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GroupTitle } from "../group/GroupTitle";
import { NoteTitle } from "./NoteTitle";
import { UserTitle } from "../user/UserTitle";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Desc" multiline source="desc" />
        <DateTimeInput label="Due date" source="dueDate" />
        <ReferenceInput source="group.id" reference="Group" label="group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="note.id" reference="Note" label="Note">
          <SelectInput optionText={NoteTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="notes"
          reference="Note"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NoteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="owner"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="severity"
          label="Severity"
          choices={[
            { label: "Low", value: "Low" },
            { label: "Moderate", value: "Moderate" },
            { label: "High", value: "High" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "ToDO", value: "ToDo" },
            { label: "Done", value: "Done" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
