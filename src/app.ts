// CONFIG. MODULES \\
import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

// CONFIG. \\
const app = express();
const PORT = 3000;

app.use(express.json());

// CONFIG. ROUTES \\
app.use(categoriesRoutes);

// START SERVER \\
app.listen(PORT, () => {
  console.log(`🚀 http://localhost:${PORT}`);
});
