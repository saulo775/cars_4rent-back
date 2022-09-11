import { Router } from "express";

import categoriesRoutes from "./categories.routes";
import { especificationsRouter } from "./especifications.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/especifications", especificationsRouter);

export default router;
