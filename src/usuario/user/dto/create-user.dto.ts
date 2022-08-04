import { IsEmail, IsNotEmpty, IsNotIn, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    nome: string;
  
    @IsNotEmpty()
    @IsString()
    sexo: string;
  
    @IsNotEmpty()
    @IsString()
    dataDeNascimento: string;

    @IsNotEmpty()
    @IsString()
    estadoCivil: string
}
