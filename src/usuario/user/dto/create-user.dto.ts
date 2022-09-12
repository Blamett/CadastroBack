import { IsDateString, IsEnum, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";
import { estadoCivil } from "../estadoCivilEnum";
import { Sexo } from "../sexoEnum";

class Endereco {

    @IsNotEmpty({ message: 'apelido é obrigatório' })
    apelido: string;

    @IsNotEmpty({ message: 'cep é obrigatório' })
    cep: string;

    @IsNotEmpty({ message: 'endereço é obrigatório' })
    endereco: string;

    @IsNotEmpty({ message: 'número é obrigatório' })
    numero: string;

    @IsNotEmpty()
    complemento: string;

    @IsNotEmpty({ message: 'cidade é obrigatório' })
    cidade: string;

    @IsNotEmpty({ message: 'estado é obrigatório' })
    estado: string;
}

export class CreateUserDto {

    @IsNotEmpty({ message: 'nome é obrigatório' })
    nome: string;

    @IsNotEmpty({ message: 'sexo é obrigatório' })
    @IsEnum(Sexo, { message: 'sexo inválido' })
    sexo: string;

    @IsNotEmpty({ message: 'data de nascimento é obrigatório' })
    dataDeNascimento: Date;

    @IsNotEmpty({ message: 'estado civil é obrigatório' })
    @IsEnum(estadoCivil, { message: 'estado civil inválido' })
    estadoCivil: string;

    @ValidateNested()
    Endereco: Endereco;
}
