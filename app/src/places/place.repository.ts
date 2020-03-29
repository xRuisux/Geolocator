import { EntityRepository, Repository } from 'typeorm';
import { Place } from './place.entity';
import { CreatePlaceDto } from './dto/create-place.dto';

@EntityRepository(Place)
export class PlaceRepository extends Repository<Place> {
  // async getPlaces(): Promise<Place[]> {
  //   const query = this.createQueryBuilder('place');

  //   if (status) {
  //     query.andWhere('place.status = :status', { status });
  //   }

  //   if (search) {
  //     query.andWhere('(place.title LIKE :search OR place.description LIKE :search)', { search: `%${search}%` });
  //   }

  //   return await query.getMany();
  // }

  async createPlace(createPlaceDTO: CreatePlaceDto): Promise<Place> {
    const { title, description } = createPlaceDTO;

    const place = new Place();
    place.title = title;
    place.description = description;
    await place.save();

    return place;
  }
}
