import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserEntity & Document;

@Schema()
export class UserEntity {
  @Prop({type: String, required: true})
  nome: string;

  @Prop({type: String, required: true})
  sexo: string;

  @Prop({type: String, required: true})
  dataDeNascimento: string;

  @Prop({type: String, required: true})
  estadoCivil: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity); 