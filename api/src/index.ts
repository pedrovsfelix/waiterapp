import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose';

import http from'node:http';
import { Server } from 'socket.io';

import { router } from './router.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('ERRO: A variável de ambiente MONGODB_URI não está definida.');
  process.exit(1);
}

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(mongoURI)
  .then(() => {
    const port = 3001;

    io.emit('orders@new')

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    })
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running in http://localhost:${port}`)
    });

    console.log('Conectado com sucesso ao MongoDB Atlas!')
  })
  .catch(err => console.error('Erro ao conectar com o MongoDB Atlas:', err));
