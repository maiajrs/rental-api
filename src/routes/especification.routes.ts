import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specifationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationController();
specifationsRoutes.post("/", createSpecificationContoller.handle);

const listaSpecificationController = new ListSpecificationController();
specifationsRoutes.get("/", listaSpecificationController.handle);

export { specifationsRoutes };
