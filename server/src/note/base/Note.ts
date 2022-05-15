/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Group } from "../../group/base/Group";
import { User } from "../../user/base/User";
import { EnumNoteSeverity } from "./EnumNoteSeverity";
import { EnumNoteStatus } from "./EnumNoteStatus";
@ObjectType()
class Note {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  desc!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Group,
  })
  @ValidateNested()
  @Type(() => Group)
  @IsOptional()
  group?: Group | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Note,
  })
  @ValidateNested()
  @Type(() => Note)
  @IsOptional()
  note?: Note | null;

  @ApiProperty({
    required: false,
    type: () => [Note],
  })
  @ValidateNested()
  @Type(() => Note)
  @IsOptional()
  notes?: Array<Note>;

  @ApiProperty({
    required: true,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  owner?: Array<User>;

  @ApiProperty({
    required: false,
    enum: EnumNoteSeverity,
  })
  @IsEnum(EnumNoteSeverity)
  @IsOptional()
  @Field(() => EnumNoteSeverity, {
    nullable: true,
  })
  severity?: "Low" | "Moderate" | "High" | null;

  @ApiProperty({
    required: false,
    enum: EnumNoteStatus,
  })
  @IsEnum(EnumNoteStatus)
  @IsOptional()
  @Field(() => EnumNoteStatus, {
    nullable: true,
  })
  status?: "ToDo" | "Done" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Note };
