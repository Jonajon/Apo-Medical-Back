import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { DoctorService } from './doctor.service';
import { GetAllDoctorDto } from './dtos/get-allDoctor.dto';
import { GetByIdDoctorDto } from './dtos/get-byIdDoctor.dto';
import { CreateDoctorDto } from './dtos/create-doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() createDoctorDto: CreateDoctorDto,
  ): Promise<{ id: string }> {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  async getAll(): Promise<GetAllDoctorDto[]> {
    return this.doctorService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<GetByIdDoctorDto> {
    return this.doctorService.getById(id);
  }
}
