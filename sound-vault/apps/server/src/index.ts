import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.send('API do Catálogo Musical funcionando!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
