import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Doctor } from '../../doctor/schemas/doctor.schema';

export type AppointmentDocument = Appointment & Document;

@Schema({
  timestamps: true,
})
export class Appointment extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  identification: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  appointmentStartDate: string;

  @Prop({ required: true })
  appointmentEndDate: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Doctor.name,
  })
  doctorId: Doctor;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
