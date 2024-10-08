import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

// ---------- CONFIG. REPOSITORY ---------- \\
class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // ---------- CREATE CATEGORY ---------- \\
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  // ---------- LIST CATEGORY ---------- \\
  list(): Category[] {
    return this.categories;
  }

  // ---------- VALIDATE CATEGORY ---------- \\
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

// ---------- EXPORT REPOSITORY ---------- \\
export { CategoriesRepository };
