import { Specification } from '../model/Specification';

// ---------- CONFIG.  CREATE SPECIFICATION ---------- //
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

// ---------- CONFIG. SPECIFICATION ---------- //
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

// ---------- EXPORT SPECIFICATION ---------- //
export { ISpecificationRepository, ICreateSpecificationDTO };
