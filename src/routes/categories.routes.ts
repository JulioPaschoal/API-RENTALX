// ---------- CONFIG. MODULES ---------- \\
import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCAtegoryService';

// ---------- CONFIG ----------\\
const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// ---------- ROUTER DE CREATE ---------- \\
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  return res.status(201).send();
});

// ---------- ROUTER DE LIST ---------- \\
categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list();

  return res.json(categories);
});

// ---------- EXPORT ROUTES ---------- \\
export { categoriesRoutes };
