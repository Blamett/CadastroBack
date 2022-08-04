import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserEntity & Document;

@Schema()
export class UserEntity {
  @Prop()
  nome: string;

  @Prop()
  sexo: string;

  @Prop()
  dataDeNascimento: string;

  @Prop()
  estadoCivil: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);