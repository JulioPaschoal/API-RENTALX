import { Category } from '../model/Category';

// DTO => DATA TRANSFER  OBJECT \\
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// CONFIG. REPOSITORY \\
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // CREATE CATEGORY \\
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  // LIST CATEGORY \\
  list(): Category[] {
    return this.categories;
  }

  // VALIDATE CATEGORY \\
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

// EXPORT REPOSITORY \\
export { CategoriesRepository };
