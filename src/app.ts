// CONFIG. MODULES \\
import express from 'express';

// CONFIG. \\
const app = express();
const PORT = 3000;

// CONFIG. ROUTES \\
app.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

// START SERVER \\
app.listen(PORT, () => {
  console.log(`🚀 http://localhost:${PORT}`);
});
