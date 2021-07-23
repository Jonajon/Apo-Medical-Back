import { IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
    
  @IsNotEmpty({ message: 'identification: identification es requerido' })
  identification: string; //cedula

  @IsNotEmpty({ message: 'name: name es requerido' })
  name: string;

  @IsNotEmpty({ message: 'tipoSeguro: tipoSeguro es requerido' })
  tipoSeguro: string;

  @IsNotEmpty({ message: 'age: age es requerido' })
  age: string;

  @IsNotEmpty({ message: 'email: email es requerido' })
  email: string;

  @IsNotEmpty({ message: 'mobileNumber: mobileNumber es requerido' })
  mobileNumber: string;

  @IsNotEmpty({ message: 'operadora: operadora es requerido' })
  operadora: string;

  @IsNotEmpty({ message: 'provincia: provincia es requerido' })
  provincia: string;

  @IsNotEmpty({ message: 'canton: canton es requerido' })
  canton: string;

  @IsNotEmpty({ message: 'sector: sector es requerido' })
  sector:string;

  @IsNotEmpty({ message: 'especialidad: especialidad es requerido' })
  especialidad: string;

  @IsNotEmpty({ message: 'fechaCita: fechaCita es requerido' })
  fechaCita: string;

  @IsNotEmpty({ message: 'nombreMedico: nombreMedico es requerido' })
  nombreMedico: string;

  @IsNotEmpty({ message: 'unidad: unidad es requerido' })
  unidad: string;  //ejemplo Ecuadental S.A

  @IsNotEmpty({ message: 'direccion: direccion es requerido' })
  direccion: string;

  @IsNotEmpty({ message: 'horarioDisponible: horarioDisponible es requerido' })
  horarioDisponible: string;
}