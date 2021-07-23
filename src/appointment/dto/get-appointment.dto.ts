export interface GetIdAppointmentDto {
    id: string;
  }
  
  export class GetAppointmentDto {
  id:string;
  nombreMedico: string;
  unidad: string;  //ejemplo Ecuadental S.A
  direccion: string;
  horarioDisponible: string;
  }