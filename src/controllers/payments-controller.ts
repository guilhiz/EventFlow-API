import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { PaymentsProcessProps } from '@/protocols';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '@/services/payments-service';

export async function getPayment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketId } = req.query;
  const { userId } = req as { userId: number };
  const ticketIdNumber = Number(ticketId);
  try {
    const { payment } = await paymentsService.getPayment(ticketIdNumber, userId);

    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    if (error.name === 'InvalidDataError') return res.status(httpStatus.BAD_REQUEST).send(error.message);

    next(error);
  }
}

export async function postPaymentsProcess(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketId, cardData } = req.body as PaymentsProcessProps;
  const { userId } = req as { userId: number };
  try {
    const { newPayment } = await paymentsService.postPaymentsProcess({ ticketId, cardData, userId });

    return res.status(httpStatus.OK).send(newPayment);
  } catch (error) {
    if (error.name === 'InvalidDataError') return res.status(httpStatus.BAD_REQUEST).send(error.message);

    next(error);
  }
}
