// CONF. MODULES \\
import { Router } from 'express';

// CONF \\
const categoriesRoutes = Router();

const categories = [];

// ROUTES \\
categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;
  categories.push({ name, description });
  return res.status(201).json(categories);
});

// EXPORT ROUTES \\
export { categoriesRoutes };
