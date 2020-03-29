import { Injectable, NotFoundException } from '@nestjs/common';
import { PlaceRepository } from './place.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './place.entity';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(PlaceRepository)
    private placeRepository: PlaceRepository,
  ) {
  }

  async getPlaces(): Promise<Place[]> {
    // return this.placeRepository.getPlaces();
    return this.placeRepository.find();
  }

  async getPlaceById(id: number): Promise<Place> {
    const found = await this.placeRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }

    return found;
  }

  async createPlace(createPlaceDTO: CreatePlaceDto): Promise<Place> {
    return this.placeRepository.createPlace(createPlaceDTO);
  }
}
