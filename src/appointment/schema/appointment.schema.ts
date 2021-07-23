import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type AppointmentDocument = Appointment & Document;

@Schema()
export class Appointment extends Document {
     @Prop({ required: true })
    identification: string;

     @Prop({ required: true })
    name: string;

     @Prop({ required: true })
    tipoSeguro: string;

     @Prop({ required: true })
    age: string;

     @Prop({ required: true })
    email: string;

     @Prop({ required: true })
     mobileNumber: string;

     @Prop({ required: true })
    operadora: string;

     @Prop({ required: true })
    provincia: string;

     @Prop({ required: true })
    canton: string;

     @Prop({ required: true })
    sector:string;

     @Prop({ required: true })
    especialidad: string;

     @Prop({ required: true })
    fechaCita: string;

     @Prop({ required: true })
    nombreMedico: string;

     @Prop({ required: true })
    unidad: string;  //ejemplo Ecuadental S.A

     @Prop({ required: true })
    direccion: string;

     @Prop({ required: true })
    horarioDisponible: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);