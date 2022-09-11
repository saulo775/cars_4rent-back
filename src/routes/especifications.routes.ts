import { Request, Response, Router } from "express";

import { EspecificationsRepository } from "../modules/cars/repositories/especifications/EspecificationsRepository";
import { CreateEspecificationService } from "../modules/cars/services/CreateEspecificationService";

const especificationsRouter = Router();

const especificationsRepository = new EspecificationsRepository();

especificationsRouter.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const createEspecificationService = new CreateEspecificationService(
    especificationsRepository
  );

  createEspecificationService.execute({ name, description });
  return res.sendStatus(201);
});

especificationsRouter.get("/", (req: Request, res: Response) => {
  const especifications = especificationsRepository.list();
  return res.status(200).json(especifications);
});

export { especificationsRouter };
