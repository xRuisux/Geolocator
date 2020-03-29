import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { Place } from './place.entity';

@Controller('places')
export class PlacesController {
  constructor(private placeService: PlacesService) {
  }

  @Get()
  getPlaces(): Promise<Place[]> {
    return this.placeService.getPlaces();
  }

  @Get('/:id')
  getPlaceById(@Param('id', ParseIntPipe) id: number): Promise<Place> {
    return this.placeService.getPlaceById(id);
  }

  @Post()
  createPlace(@Body() createPlaceDTO: CreatePlaceDto): Promise<Place> {
    return this.placeService.createPlace(createPlaceDTO);
  }
}
