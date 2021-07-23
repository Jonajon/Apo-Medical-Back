import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor extends Document {
  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  specialty: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
