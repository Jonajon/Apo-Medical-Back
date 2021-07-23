import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment, AppointmentDocument } from './schema/appointment.schema';
import { GetIdAppointmentDto, GetAppointmentDto } from 'src/appointment/dto/get-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
    constructor(@InjectModel('Appointment') private readonly appointmentModel: Model<AppointmentDocument>){}

    async create(createAppointmentDto: CreateAppointmentDto): Promise<GetIdAppointmentDto> {
       const createdAppointment = await this.appointmentModel.create({ ...createAppointmentDto });
        return {
          id: createdAppointment.id,
        };
      }

      async getAll(): Promise<GetAppointmentDto[]> {
        const appointments = await this.appointmentModel.find().lean();
        return appointments.map((appointment) => {
          return {
            id: appointment.id,
            identification: appointment.identification,
            name: appointment.name,
            tipoSeguro: appointment.tipoSeguro,
            age: appointment.age,
            email: appointment.email,
            mobileNumber: appointment.mobileNumber,
            operadora: appointment.operadora,
            provincia: appointment.provincia,
            canton: appointment.canton,
            sector: appointment.sector,
            especialidad: appointment.especialidad,
            fechaCita: appointment.fechaCita,
            nombreMedico: appointment.nombreMedico,
            unidad: appointment.unidad,
            direccion: appointment.direccion,
            horarioDisponible: appointment.horarioDisponible,
          };
        });
      }

      async getById(id: string): Promise<GetAppointmentDto> {
        const appointment = await this.appointmentModel.findById(id).lean();
        return {
            id:appointment.id,
            nombreMedico: appointment.nombreMedico,
            unidad: appointment.unidad,
            direccion: appointment.direccion,
            horarioDisponible: appointment.horarioDisponible,
        };
      }

      async updateById(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<GetIdAppointmentDto> {
        await this.appointmentModel.updateOne({ id: id }, updateAppointmentDto);
        return {
            id,
        };
      }

}
