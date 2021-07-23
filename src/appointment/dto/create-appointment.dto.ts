import { IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty({ message: 'name: name es requerido' })
  name: string;

  @IsNotEmpty({ message: 'lastname: lastname es requerido' })
  lastname: string;

  @IsNotEmpty({ message: 'identification: identification es requerido' })
  identification: string;

  @IsNotEmpty({ message: 'email: email es requerido' })
  email: string;

  @IsNotEmpty({ message: 'phone: phone es requerido' })
  phone: string;

  @IsNotEmpty({
    message: 'appointmentStartDate: appointmentStartDate es requerido',
  })
  appointmentStartDate: string;

  @IsNotEmpty({
    message: 'appointmentEndDate: appointmentEndDate es requerido',
  })
  appointmentEndDate: string;

  @IsNotEmpty({ message: 'doctorId: doctorId es requerido' })
  doctorId: string;
}
