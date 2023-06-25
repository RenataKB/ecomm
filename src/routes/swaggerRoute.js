import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';

const router = express.Router();
const file = fs.readFileSync('./swagger/ecomm.yaml', 'utf-8');
const swaggerDocument = YAML.parse(file);

router
  .use('/api-docs', swaggerUi.serve)
  .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
