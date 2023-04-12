import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function findPaymentByTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      id: ticketId,
    },
  });
}

async function createPayment(payment: Prisma.PaymentCreateInput) {
  return prisma.payment.create({
    data: payment,
  });
}

const paymentsRepository = {
  findPaymentByTicketId,
  createPayment,
};

export default paymentsRepository;
