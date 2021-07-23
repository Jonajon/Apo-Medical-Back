export interface IBusySchedule {
  nameClient: string;
  startDate: string;
  endDate: string;
}

export class GetByIdDoctorDto {
  id: string;
  name: string;
  lastname: string;
  specialty: string;
  busySchedule: IBusySchedule[];
}
