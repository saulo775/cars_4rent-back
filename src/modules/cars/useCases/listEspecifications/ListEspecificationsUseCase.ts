import { Especification } from "../../entities/Especification";
import { IEspecificationRepository } from "../../repositories/especifications/IEspecificationsRepository";

class ListEspecificationsUseCase {
  constructor(private especificationsRepository: IEspecificationRepository) {}
  execute(): Especification[] {
    const especifications = this.especificationsRepository.list();
    return especifications;
  }
}

export { ListEspecificationsUseCase };
