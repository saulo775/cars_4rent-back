import { IEspecificationRepository } from "../../repositories/especifications/IEspecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateEspecificationUseCase {
  // instancio o meu repositorio
  constructor(private especificationsRepository: IEspecificationRepository) {}

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

export { CreateEspecificationUseCase };
