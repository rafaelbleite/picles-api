import { IsNotEmpty, IsString } from 'class-validator';

export default class UploadPhotoPetControllerInput {
  @IsString()
  @IsNotEmpty()
  photoUri: string;

}
