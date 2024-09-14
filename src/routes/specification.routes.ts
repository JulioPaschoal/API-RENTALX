//  CONFIG. MODULE ----------\\
import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

//  CONFIG. ROUTES ----------\\
const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

//  ROUTER DE CREATE ----------\\
specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );
  createSpecificationService.execute({ name, description });
  return res.status(201).send();
});

// ---------- EXPORT ROUTES ----------\\
export { specificationRoutes };
