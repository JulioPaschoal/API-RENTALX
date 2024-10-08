import { Category } from '../model/Category';

// ---------- DTO => DATA TRANSFER  OBJECT ---------- \\
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// ---------- CONFIG. INTERFACE ---------- \\
interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
