import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ default: '' })
  birth_date: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  identity: string;

  @Column({ default: '' })
  passport_number: string;
}
