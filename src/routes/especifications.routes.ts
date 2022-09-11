import { Router } from "express";

import { createEspecificationController } from "../modules/cars/useCases/createEspecifications/index";
import { listEspecificationsController } from "../modules/cars/useCases/listEspecifications";

const especificationsRouter = Router();

especificationsRouter.post("/", (request, response) => {
  createEspecificationController.handle(request, response);
});

especificationsRouter.get("/", (request, response) => {
  listEspecificationsController.handle(request, response);
});

export { especificationsRouter };
