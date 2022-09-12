import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { estadoCivil } from '../estadoCivilEnum';
import { Sexo } from '../sexoEnum';
import { EnderecoEntity, EnderecoSchema } from './endereco.entity';

export type UserDocument = UserEntity & Document;

@Schema()
export class UserEntity {
    @Prop({ type: String, required: true })
    nome: string;

    @Prop({ type: String, required: true, enum: Sexo })
    sexo: string;

    @Prop({ type: Date, required: true })
    dataDeNascimento: Date;

    @Prop({ type: String, required: true, enum: estadoCivil })
    estadoCivil: string;

    @Prop({ type: [EnderecoSchema], required: true, })
    Endereco: EnderecoEntity[];

}

export const UserSchema = SchemaFactory.createForClass(UserEntity); 