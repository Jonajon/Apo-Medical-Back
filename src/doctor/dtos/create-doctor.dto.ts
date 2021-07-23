import { IsNotEmpty } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty({ message: 'name: name es requerido' })
  name: string;

  @IsNotEmpty({ message: 'lastname: lastname es requerido' })
  lastname: string;

  @IsNotEmpty({ message: 'specialty: specialty es requerido' })
  specialty: string;
}
