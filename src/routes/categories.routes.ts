// CONF. MODULES \\
import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

// CONF \\
const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// ROUTER DE CREATE \\
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  // VALIDATION CATEGORY \\
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'Category already exists' });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

// ROUTER DE LIST \\
categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list();

  return res.json(categories);
});

// EXPORT ROUTES \\
export { categoriesRoutes };
