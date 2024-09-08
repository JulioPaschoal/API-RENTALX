// CONF. MODULES \\
import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';


// CONF \\
const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// ROUTER DE CREATE \\
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  categoriesRepository.create({name, description});

  return res.status(201).send();
});

// EXPORT ROUTES \\
export { categoriesRoutes };
