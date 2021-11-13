import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specifationsRoutes = Router();

specifationsRoutes.use(ensureAuthenticated)
const createSpecificationContoller = new CreateSpecificationController();
specifationsRoutes.post("/", createSpecificationContoller.handle);

const listaSpecificationController = new ListSpecificationController();
specifationsRoutes.get("/", listaSpecificationController.handle);

export { specifationsRoutes };
