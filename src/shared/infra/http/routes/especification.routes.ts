import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { checkUserAdmin } from "../middlewares/checkUserAdmin";

const specifationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationController();
specifationsRoutes.post("/",ensureAuthenticated, checkUserAdmin, createSpecificationContoller.handle);

const listaSpecificationController = new ListSpecificationController();
specifationsRoutes.get("/", listaSpecificationController.handle);

export { specifationsRoutes };
