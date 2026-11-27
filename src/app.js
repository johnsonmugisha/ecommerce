const express = require('express');
const healthRoutes = require('./routes/health.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/api/products', productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'not found route' });
});

module.exports = app;
