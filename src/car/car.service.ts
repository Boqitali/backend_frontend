import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Car } from "./entities/car.entity";

@Injectable()
export class CarService {
  private cars: Car[] = [];
  private idCounter = 1;

  create(createCarDto: CreateCarDto) {
    const newCar: Car = { id: this.idCounter++, ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    const carIndex = this.cars.findIndex((c) => c.id === id);
    if (carIndex === -1)
      throw new NotFoundException(`Car with id ${id} not found`);

    this.cars[carIndex] = { ...this.cars[carIndex], ...updateCarDto };
    return this.cars[carIndex];
  }

  remove(id: number) {
    const carIndex = this.cars.findIndex((c) => c.id === id);
    if (carIndex === -1)
      throw new NotFoundException(`Car with id ${id} not found`);

    const deleted = this.cars[carIndex];
    this.cars.splice(carIndex, 1);
    return deleted;
  }
}
