import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, DeleteUserDto, ReadUsersDto } from './user.dto';
import { ValidationPipe } from '../shared/pipes/validation.pipe';
import { ApiTags, ApiResponse } from '@nestjs/swagger';


@ApiTags('user')
@Controller()
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get('users')
  @ApiResponse({ type: [ReadUsersDto], status: HttpStatus.OK })
  async read(): Promise<ReadUsersDto[]> {
    return await this.userService.findAll();
  }

  @UsePipes(new ValidationPipe())
  @Put('users/:id')
  async update(@Param('id') userId: number, @Body() userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @UsePipes(new ValidationPipe())
  @Post('users')
  async create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete('users/:id')
  async delete(@Param() params: DeleteUserDto) {
    return await this.userService.delete(params.id);
  }
}
