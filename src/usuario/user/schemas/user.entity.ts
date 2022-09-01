import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EnderecoEntity, EnderecoSchema } from './endereco.entity';

export type UserDocument = UserEntity & Document;

@Schema()
export class UserEntity {
  @Prop({ type: String, required: true })
  nome: string;

  @Prop({ type: String, required: true })
  sexo: string;

  @Prop({ type: Date, required: true })
  dataDeNascimento: Date;

  @Prop({ type: String, required: true })
  estadoCivil: string;

  @Prop({ type: [EnderecoSchema], required: true, })
  Endereco: EnderecoEntity[]

}

export const UserSchema = SchemaFactory.createForClass(UserEntity); 