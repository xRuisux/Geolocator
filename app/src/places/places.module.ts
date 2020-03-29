import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceRepository } from './place.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlaceRepository]),
  ],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {
}
