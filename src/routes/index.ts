import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specifationsRoutes } from "./especification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specifationsRoutes);

export { router };
