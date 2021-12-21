import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'username' })
  readonly username: string;

  @ApiProperty({ required: true, example: 'user@email.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ required: true, example: '+0 000 0000 00' })
  readonly phone: string;

  @ApiProperty({ required: true, example: '1900-00-00' })
  readonly birth_date: string;

  @ApiProperty({ required: true, example: 'identity' })
  readonly identity: string;

  @ApiProperty({ required: true, example: 'Passport Number' })
  readonly passport_number: string;
}

export class DeleteUserDto {
  @ApiProperty()
  readonly id: number;
}

export class ReadUsersDto {
  @ApiResponseProperty()
  readonly username: string;

  @ApiResponseProperty()
  readonly email: string;

  @ApiResponseProperty()
  readonly phone: string;

  @ApiResponseProperty()
  readonly birth_date: string;

  @ApiResponseProperty()
  readonly identity: string;

  @ApiResponseProperty()
  readonly passport_number: string;
}

export class UpdateUserDto {
  @ApiProperty({ required: true, example: 'username' })
  readonly username: string;

  @ApiProperty({ required: true, example: 'user@email.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ required: true, example: '+0 000 0000 00' })
  readonly phone: string;

  @ApiProperty({ required: true, example: '1900-00-00' })
  readonly birth_date: string;

  @ApiProperty({ required: true, example: 'identity' })
  readonly identity: string;

  @ApiProperty({ required: true, example: 'Passport Number' })
  readonly passport_number: string;
}