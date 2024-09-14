// ---------- CONFIG. MODULE ----------\\
import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
// ---------- CONFIG. SPECIFICATION ---------- \\
class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    // ---------- VALIDATION SPECIFICATION ----------\\
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }
    this.specificationRepository.create({ name, description });
  }
}

// ---------- EXPORT SERVICE ---------- \\
export { CreateSpecificationService };
