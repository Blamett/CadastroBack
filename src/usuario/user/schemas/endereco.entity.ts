import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EnderecoEntity {

    @Prop({ type: String, required: true })
    apelido: string;

    @Prop({ type: Number, required: true })
    cep: string;

    @Prop({ type: String, required: true })
    endereco: string;

    @Prop({ type: Number, required: true })
    numero: string;

    @Prop({ type: String })
    complemento: string;

    @Prop({ type: String, required: true })
    cidade: string;

    @Prop({ type: String, required: true })
    estado: string;

}

export const EnderecoSchema = SchemaFactory.createForClass(EnderecoEntity); 
