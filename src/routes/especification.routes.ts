import { Router } from "express";

import { createSpecificationContoller } from "../modules/cars/useCases/createSpecification";
import { listaSpecificationController } from "../modules/cars/useCases/listSpecifications";

const specifationsRoutes = Router();

specifationsRoutes.post("/", (req, res) => {
  createSpecificationContoller.handle(req, res);
});

specifationsRoutes.get("/", (req, res) => {
  listaSpecificationController.handle(req, res);
});

export { specifationsRoutes };
