import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppErrors } from "@shared/errors/AppErrors";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("it should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: 'category',
    });
    expect(car).toHaveProperty("id")
  });

  it("it should not be able to create a car that already exists", async () => {
    await createCarUseCase.execute({
      name: "Name Car 1",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    expect(async () => {
      await createCarUseCase.execute({
        name: "Name Car 2",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "ABC-123",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });

  it("it should be able to register a car with property available with value true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car with available true",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "ABC-123",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
    })
    expect(car.available).toBe(true)
  })
});
