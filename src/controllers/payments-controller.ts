import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '@/services/payments-service';

export async function getPayment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketId } = req.query;
  const ticketIdNumber = Number(ticketId);
  try {
    const { payment } = await paymentsService.getPayment(ticketIdNumber);

    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    if (error.name === 'NotFoundError' || error.name === 'UnauthorizedError') {
      return next(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function postPaymentsProcess(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    return res.status(httpStatus.OK).send();
  } catch (error) {
    if (error.name === 'NotFoundError' || error.name === 'UnauthorizedError') {
      return next(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}
