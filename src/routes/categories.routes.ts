// CONF. MODULES \\
import { Router } from 'express';
import { Category } from '../model/Category';

// CONF \\
const categoriesRoutes = Router();

const categories: Category[] = [];

// ROUTES \\
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const category = new Category();
  Object.assign(category,{
    name,
    description,
    created_at: new Date(),
  });
  categories.push( category );
  return res.status(201).json({category});
});

// EXPORT ROUTES \\
export { categoriesRoutes };
