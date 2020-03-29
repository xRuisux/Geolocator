import { IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
