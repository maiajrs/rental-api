import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarsController";
import { Router } from "express";
import { checkUserAdmin } from "../middlewares/checkUserAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController()

carRoutes.post("/", ensureAuthenticated, checkUserAdmin, createCarController.handle);

carRoutes.get('/available', listAvailableCarsController.handle)

export { carRoutes };
