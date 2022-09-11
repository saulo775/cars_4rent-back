import { EspecificationsRepository } from "../../repositories/especifications/EspecificationsRepository";
import { CreateEspecificationController } from "./CreateEspecificationController";
import { CreateEspecificationUseCase } from "./CreateEspecificationUseCase";

const especificationsRepository = new EspecificationsRepository();
const createEspecificationUseCase = new CreateEspecificationUseCase(
  especificationsRepository
);
const createEspecificationController = new CreateEspecificationController(
  createEspecificationUseCase
);

export { createEspecificationController };
