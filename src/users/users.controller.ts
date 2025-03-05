import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";
import { UpdateUserParams } from "./dto/UpdateUserParams";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException("Invalid ID", 400);
    }
    const findUser = await this.usersService.getUserById(id);
    if (!findUser) {
      throw new HttpException("User not found", 404);
    }
    return this.usersService.getUserById(id);
  }

  @Patch(":id")
  async updateUser(
    @Param() params: UpdateUserParams,
    @Body() dto: UpdateUserDto,
  ) {
    const findUser = await this.usersService.getUserById(params.id);
    if (!findUser) {
      throw new HttpException("User not found", 404);
    }
    return this.usersService.updateUser(params.id, dto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    const findUser = await this.usersService.getUserById(id);
    if (!findUser) {
      throw new HttpException("User not found", 404);
    }
    return this.usersService.deleteUser(id);
  }
}
