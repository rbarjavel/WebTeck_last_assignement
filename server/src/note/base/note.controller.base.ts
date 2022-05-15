/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NoteService } from "../note.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NoteCreateInput } from "./NoteCreateInput";
import { NoteWhereInput } from "./NoteWhereInput";
import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteFindManyArgs } from "./NoteFindManyArgs";
import { NoteUpdateInput } from "./NoteUpdateInput";
import { Note } from "./Note";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NoteControllerBase {
  constructor(
    protected readonly service: NoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Note })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: NoteCreateInput): Promise<Note> {
    return await this.service.create({
      data: {
        ...data,

        group: {
          connect: data.group,
        },
      },
      select: {
        createdAt: true,
        desc: true,
        dueDate: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        severity: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Note] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(NoteFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Note[]> {
    const args = plainToClass(NoteFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        desc: true,
        dueDate: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        severity: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Note })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: NoteWhereUniqueInput
  ): Promise<Note | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        desc: true,
        dueDate: true,

        group: {
          select: {
            id: true,
          },
        },

        id: true,
        severity: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Note })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: NoteWhereUniqueInput,
    @common.Body() data: NoteUpdateInput
  ): Promise<Note | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          group: {
            connect: data.group,
          },
        },
        select: {
          createdAt: true,
          desc: true,
          dueDate: true,

          group: {
            select: {
              id: true,
            },
          },

          id: true,
          severity: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Note",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Note })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: NoteWhereUniqueInput
  ): Promise<Note | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          desc: true,
          dueDate: true,

          group: {
            select: {
              id: true,
            },
          },

          id: true,
          severity: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
