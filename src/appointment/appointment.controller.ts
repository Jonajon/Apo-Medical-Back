import {Body,Controller,Put,Get,Param,Post} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from 'src/appointment/dto/create-appointment.dto';
import { GetIdAppointmentDto,GetAppointmentDto } from 'src/appointment/dto/get-appointment.dto';
import { UpdateAppointmentDto } from  'src/appointment/dto/update-appointment.dto';

@Controller('appointment')
export class AppointmentController {
    constructor (private appointmentService: AppointmentService){}
    
    @Post()
    async create(@Body() createAppointmentDto: CreateAppointmentDto): Promise<GetIdAppointmentDto> {
        return this.appointmentService.create(createAppointmentDto);
    }

    @Get()
    async getAll(): Promise<GetAppointmentDto[]> {
        return this.appointmentService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<GetAppointmentDto> {
      return this.appointmentService.getById(id);
    }
    
    @Put(':id')
    async updateById(@Param('id') id: string, @Body() identification: UpdateAppointmentDto): Promise<GetIdAppointmentDto> {
      return this.appointmentService.updateById(id, identification);
    }
}
