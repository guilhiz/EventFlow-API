import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types').get('/').post('/');

export { ticketsRouter };
