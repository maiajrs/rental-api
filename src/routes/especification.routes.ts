import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specifationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specifationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specifationsRoutes };
