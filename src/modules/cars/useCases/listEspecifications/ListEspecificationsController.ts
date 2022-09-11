import { Request, Response } from "express";

import { ListEspecificationsUseCase } from "./ListEspecificationsUseCase";

class ListEspecificationsController {
  constructor(private listEspecificationsUseCase: ListEspecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const especifications = this.listEspecificationsUseCase.execute();
    return res.status(200).json(especifications);
  }
}

export { ListEspecificationsController };
