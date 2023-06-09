import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getPayment, postPaymentsProcess } from '@/controllers/payments-controller';

const paymentsRouter = Router();

paymentsRouter.all('/*', authenticateToken).get('/', getPayment).post('/process', postPaymentsProcess);

export { paymentsRouter };
