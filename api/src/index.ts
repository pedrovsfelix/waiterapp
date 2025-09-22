import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose';

import { router } from './router.js';

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('ERRO: A variável de ambiente MONGODB_URI não está definida.');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running in http://localhost:${port}`)
    });

    console.log('Conectado com sucesso ao MongoDB Atlas!')
  })
  .catch(err => console.error('Erro ao conectar com o MongoDB Atlas:', err));
