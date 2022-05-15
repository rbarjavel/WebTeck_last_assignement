/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { NoteCreateNestedManyWithoutGroupsInput } from "./NoteCreateNestedManyWithoutGroupsInput";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutGroupsInput } from "./UserCreateNestedManyWithoutGroupsInput";
@InputType()
class GroupCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => NoteCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => NoteCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => NoteCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  notes?: NoteCreateNestedManyWithoutGroupsInput;

  @ApiProperty({
    required: true,
    type: () => UserCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutGroupsInput;
}
export { GroupCreateInput };
