import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

import { Doctor, DoctorDocument } from './schemas/doctor.schema';
import { GetAllDoctorDto } from './dtos/get-allDoctor.dto';
import { GetByIdDoctorDto } from './dtos/get-byIdDoctor.dto';
import {
  Appointment,
  AppointmentDocument,
} from '../appointment/schemas/appointment.schema';
import { CreateDoctorDto } from './dtos/create-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name)
    private readonly doctorModel: Model<DoctorDocument>,
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<AppointmentDocument>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<{ id: string }> {
    const doctor = await this.doctorModel.create({
      ...createDoctorDto,
    });
    return {
      id: doctor._id,
    };
  }

  async getAll(): Promise<GetAllDoctorDto[]> {
    const doctors = await this.doctorModel.find().lean();
    return doctors.map((doctor) => {
      return {
        id: doctor._id,
        avatar: doctor.avatar,
        name: doctor.name,
        lastname: doctor.lastname,
        specialty: doctor.specialty,
      };
    });
  }

  async getById(doctorId: string): Promise<GetByIdDoctorDto> {
    const doctor = await this.doctorModel.findById({ _id: doctorId }).lean();
    const doctorObjectId: any = new mongoose.Types.ObjectId(doctorId);
    const appointments = await this.appointmentModel.find({
      doctorId: doctorObjectId,
    });
    const busyScheduleAppointments = appointments.map((appointment) => {
      return {
        nameClient: appointment.name,
        startDate: appointment.appointmentStartDate,
        endDate: appointment.appointmentEndDate,
      };
    });
    return {
      id: doctor._id,
      avatar: doctor.avatar,
      name: doctor.name,
      lastname: doctor.lastname,
      specialty: doctor.specialty,
      busySchedule: busyScheduleAppointments,
    };
  }
}
