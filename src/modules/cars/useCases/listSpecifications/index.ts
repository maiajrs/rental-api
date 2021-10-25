import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListCategoriesController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationsUseCase(
  specificationRepository
);
const listaSpecificationController = new ListCategoriesController(
  listSpecificationUseCase
);

export { listaSpecificationController };
