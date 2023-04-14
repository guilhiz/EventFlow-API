import paymentsRepository from '@/repositories/payments-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { invalidDataError, notFoundError, unauthorizedError } from '@/errors';

async function getPayment(ticketId: number, userId: number) {
  if (!ticketId) throw invalidDataError(['Ticket ID must be provided']);
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  const payment = await paymentsRepository.findPaymentByTicketId(ticketId);

  if (!payment) throw notFoundError();

  return { payment };
}

// async function postPaymentsProcess() {}

const paymentsService = {
  getPayment,
  // postPaymentsProcess,
};

export default paymentsService;
