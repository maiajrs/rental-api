import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { checkUserAdmin } from "../middlewares/checkUserAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carRoutes = Router();

const createCarController = new CreateCarController();
carRoutes.post("/", ensureAuthenticated, checkUserAdmin, createCarController.handle);

export { carRoutes };
