import { Router } from "express";

import { EspecificationsRepository } from "../modules/cars/repositories/especifications/EspecificationsRepository";
import { createEspecificationController } from "../modules/cars/useCases/createEspecification/index";

const especificationsRouter = Router();

const especificationsRepository = new EspecificationsRepository();

especificationsRouter.post("/", (request, response) => {
  createEspecificationController.handle(request, response);
});

especificationsRouter.get("/", (request, response) => {
  const especifications = especificationsRepository.list();
  return response.status(200).json(especifications);
});

export { especificationsRouter };
