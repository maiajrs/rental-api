import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("it should be able to list all availabe cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car])
  });

  it("it should be able to find a car by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car 2",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category-123",
    });
 
    const cars = await listCarsUseCase.execute({
        category_id: "category-123"
    });
 
    expect(cars).toEqual([car])
  });
  it("it should be able to find a car by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car 2",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand-test",
      category_id: "category-123",
    });
 
    const cars = await listCarsUseCase.execute({
        brand: "Brand-test"
    });
 
    expect(cars).toEqual([car])
  });
  it("it should be able to find a car by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car test",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand-test",
      category_id: "category-123",
    });
 
    const cars = await listCarsUseCase.execute({
        name: "Name Car test"
    });
 
    expect(cars).toEqual([car])
  });
});
