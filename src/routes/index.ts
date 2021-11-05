import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specifationsRoutes } from "./especification.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specifationsRoutes);
router.use("/users", usersRoutes);

export { router };
