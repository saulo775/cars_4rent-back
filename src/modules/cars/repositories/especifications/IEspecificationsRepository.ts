import { Especification } from "../../entities/Especification";

interface ICreateEspecificationDTO {
  name: string;
  description: string;
}

interface IEspecificationRepository {
  create({ name, description }: ICreateEspecificationDTO): void;
  list(): Especification[];
  findByName(name: string): Especification;
}

export { ICreateEspecificationDTO, IEspecificationRepository };
