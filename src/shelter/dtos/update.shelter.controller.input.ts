import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
} from 'class-validator';

export default class UpdateShelterControllerInput {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 11)
  whatsApp: string;
  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 11)
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
