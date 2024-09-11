import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

// ---------- CONFIG. POSTGRES REPOSITORY ---------- \\
class PostgresCategoriesRepository implements ICategoriesRepository {
  // ---------- IMPLEMENTATION ---------- \\
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
