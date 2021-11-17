import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import { checkUserAdmin } from "../middlewares/checkUserAdmin";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  checkUserAdmin,
  createCategoryController.handle
);

const listCategoriesController = new ListCategoriesController();
categoriesRoutes.get("/", listCategoriesController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  checkUserAdmin,
  importCategoryController.handle
);

export { categoriesRoutes };
