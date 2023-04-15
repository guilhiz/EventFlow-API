import { Payment } from '@prisma/client';
import paymentsRepository from '@/repositories/payments-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import { invalidDataError, notFoundError, unauthorizedError } from '@/errors';
import { PaymentsProcessProps } from '@/protocols';

async function getPayment(ticketId: number, userId: number) {
  if (!ticketId) throw invalidDataError(['Ticket ID must be provided']);
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  const payment = await paymentsRepository.findPaymentByTicketId(ticketId);

  if (!payment) throw notFoundError();

  return { payment };
}

async function postPaymentsProcess({ ticketId, cardData, userId }: PaymentsProcessProps) {
  if (!ticketId || !cardData) throw invalidDataError(['ticket Id and card Data must be provided']);

  const ticket = await ticketsRepository.findTicketByTicketId(ticketId);

  if (!ticket) throw notFoundError();

  if (ticket.Enrollment.userId !== userId) throw unauthorizedError();

  const payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'> = {
    ticketId,
    value: ticket.TicketType.price,
    cardIssuer: cardData.issuer,
    cardLastDigits: cardData.number.slice(-4),
  };

  const newPayment = await paymentsRepository.createPayment(payment);

  return { newPayment };
}

const paymentsService = {
  getPayment,
  postPaymentsProcess,
};

export default paymentsService;
