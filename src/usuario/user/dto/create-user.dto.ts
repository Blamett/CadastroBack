import { IsNotEmpty, ValidateNested } from "class-validator";

class Endereco {

    @IsNotEmpty()
    cep: string;

    @IsNotEmpty()
    endereco: string;

    @IsNotEmpty()
    numero: string;

    @IsNotEmpty()
    complemento: string;

    @IsNotEmpty()
    cidade: string;

    @IsNotEmpty()
    estado: string;
}

export class CreateUserDto {

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    sexo: string;

    @IsNotEmpty()
    dataDeNascimento: string;

    @IsNotEmpty()
    estadoCivil: string

    @ValidateNested()
    Endereco: Endereco;
}
