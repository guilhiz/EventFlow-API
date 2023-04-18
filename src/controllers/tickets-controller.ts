import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketsService from '@/services/tickets-service';

export async function getTicketsType(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { types } = await ticketsService.getTicketsType();

    return res.status(httpStatus.OK).send(types);
  } catch (error) {
    if (error.name === 'InvalidDataError') return res.status(httpStatus.BAD_REQUEST).send(error.message);

    next(error);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req as { userId: number };

  try {
    const { ticket } = await ticketsService.getTicket(userId);

    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    if (error.name === 'InvalidDataError') return res.status(httpStatus.BAD_REQUEST).send(error.message);

    next(error);
  }
}

export async function postTickets(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketTypeId } = req.body as { ticketTypeId: number };
  const { userId } = req as { userId: number };

  try {
    const { newTicket } = await ticketsService.postTickets(ticketTypeId, userId);

    return res.status(httpStatus.CREATED).send(newTicket);
  } catch (error) {
    if (error.name === 'InvalidDataError') return res.status(httpStatus.BAD_REQUEST).send(error.message);

    next(error);
  }
}
