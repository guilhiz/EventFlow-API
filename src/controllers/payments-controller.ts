import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '@/services/payments-service';

export async function getPayment(req: AuthenticatedRequest, res: Response) {
  const { ticketId } = req.query;
  const { userId } = req as { userId: number };
  const ticketIdNumber = Number(ticketId);
  try {
    const { payment } = await paymentsService.getPayment(ticketIdNumber, userId);

    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    console.log(error.name);

    if (error.name === 'NotFoundError') return res.status(httpStatus.NOT_FOUND).send(error.message);

    if (error.name === 'UnauthorizedError') return res.status(httpStatus.UNAUTHORIZED).send(error.message);

    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function postPaymentsProcess(req: AuthenticatedRequest, res: Response) {
  try {
    return res.status(httpStatus.OK).send();
  } catch (error) {
    if (error.name === 'NotFoundError') return res.status(httpStatus.NOT_FOUND).send(error.message);

    if (error.name === 'UnauthorizedError') return res.status(httpStatus.UNAUTHORIZED).send(error.message);

    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}
