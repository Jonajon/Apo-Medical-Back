import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';


@Module({
  imports: [
    AppointmentModule,
    MongooseModule.forRoot('mongodb+srv://admin:IMGrYh1CyDJPalJp@cluster0.x1w77.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

