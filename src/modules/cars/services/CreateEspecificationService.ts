import { EspecificationsRepository } from "../repositories/especifications/EspecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateEspecificationService {
  // instancio o meu repositorio
  constructor(private especificationsRepository: EspecificationsRepository) {}

  // crio as regras de negocio
  execute({ name, description }: IRequest) {
    const especificationAlreadyExists =
      this.especificationsRepository.findByName(name);

    if (especificationAlreadyExists) {
      throw new Error("Expecification Already exists");
    }

    this.especificationsRepository.create({ name, description });
  }
}

export { CreateEspecificationService };
