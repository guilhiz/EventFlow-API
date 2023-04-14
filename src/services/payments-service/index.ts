import paymentsRepository from '@/repositories/payments-repository';
import { invalidDataError, notFoundError } from '@/errors';

async function getPayment(ticketId: number) {
  if (!ticketId) throw invalidDataError(['ticketId is required']);

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
