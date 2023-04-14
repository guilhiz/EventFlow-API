import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketsService from '@/services/tickets-service';

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const { types } = await ticketsService.getTicketsType();

    return res.status(httpStatus.OK).send(types);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req as { userId: number };

  try {
    const { ticket } = await ticketsService.getTicket(userId);

    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    console.log(error);
    if (error.name === 'NotFoundError') return res.status(httpStatus.NOT_FOUND).send(error.message);
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {
  const { ticketTypeId } = req.body as { ticketTypeId: number };
  const { userId } = req as { userId: number };

  try {
    const { newTicket } = await ticketsService.postTickets(ticketTypeId, userId);

    return res.status(httpStatus.CREATED).send(newTicket);
  } catch (error) {
    if (error.name === 'NotFoundError') return res.status(httpStatus.NOT_FOUND).send(error.message);
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}
