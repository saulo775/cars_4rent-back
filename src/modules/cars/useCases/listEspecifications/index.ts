import { EspecificationsRepository } from "../../repositories/especifications/EspecificationsRepository";
import { ListEspecificationsController } from "./ListEspecificationsController";
import { ListEspecificationsUseCase } from "./ListEspecificationsUseCase";

const especificationsRepository = EspecificationsRepository.getInstance();
const listEspecificationsUseCase = new ListEspecificationsUseCase(
  especificationsRepository
);
const listEspecificationsController = new ListEspecificationsController(
  listEspecificationsUseCase
);

export { listEspecificationsController };
