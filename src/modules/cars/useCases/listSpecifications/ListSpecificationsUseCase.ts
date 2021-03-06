import { Specification } from "@modules/cars/entities/Specification";
import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
