// backend/index.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import apiRoutes from './routes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:8080' }));
app.use((req, _res, next) => { console.log(req.method, req.url); next(); });
app.use(express.json());

// health
app.get('/health', (_req: any, res: any) => res.json({ ok: true }));

// API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => console.log(`API running on ${PORT}`));

// shutdown
process.on('SIGINT', async () => { await prisma.$disconnect(); server.close(() => process.exit(0)); });
process.on('SIGTERM', async () => { await prisma.$disconnect(); server.close(() => process.exit(0)); });