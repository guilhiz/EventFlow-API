import ticketsRepository from '@/repositories/tickets-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { invalidDataError, notFoundError } from '@/errors';

async function getTicketsType() {
  const types = await ticketsRepository.findTicketsType();

  return { types };
}

async function getTicket(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByUserId(userId);

  if (!ticket) throw notFoundError();

  return { ticket };
}

async function postTickets(ticketTypeId: number, userId: number) {
  if (!ticketTypeId) throw invalidDataError(['ticketTypeId is required']);

  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!enrollment) throw notFoundError();

  const newTicket = await ticketsRepository.createTicket(ticketTypeId, enrollment.id);

  console.log({ newTicket });
  return { newTicket };
}

const ticketsService = {
  getTicketsType,
  getTicket,
  postTickets,
};

export default ticketsService;
