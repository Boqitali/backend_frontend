import { IsString, MinLength, IsNumber } from "class-validator";

export class CreateCarDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  brand: string;

  @IsString()
  color: string;

  @IsString()
  releaseDate: string;

  @IsNumber()
  power: number;
}
