import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { findBooking, createBooking, updateBooking } from '@/controllers';

const bookingRouter = Router();

bookingRouter
  .all('/*', authenticateToken)
  .post('/', createBooking)
  .get('/', findBooking)
  .put('/:bookingId', updateBooking);

export { bookingRouter };
