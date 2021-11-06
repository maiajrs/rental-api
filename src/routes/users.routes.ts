import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const createUserController = new CreateUserController();
usersRoutes.get("/", createUserController.handle);

export { usersRoutes };
