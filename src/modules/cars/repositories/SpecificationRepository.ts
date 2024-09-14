// ---------- CONFIG. MODULE ---------- //
import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './ISpecificationRepository';

// ---------- CONFIG. SPECIFICATION REPOSITORY ---------- //
class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  // ---------- CONFIG. CONSTRUCTOR ---------- //
  constructor() {
    this.specifications = [];
  }

  // ---------- CONFIG. CREATE ---------- //
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }
}

// ---------- EXPORT SPECIFICATION REPOSITORY ---------- //
export { SpecificationRepository };
