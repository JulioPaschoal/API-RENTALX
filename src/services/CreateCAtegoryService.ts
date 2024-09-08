import { CategoriesRepository } from '../repositories/CategoriesRepository';

// ---------- CONFIG. INTERFACE ---------- \\
interface IRequest {
  name: string;
  description: string;
}
// ---------- CONFIG. CREATE ---------- \\
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    // ---------- VALIDATION CATEGORY ----------\\
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('Category  already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
