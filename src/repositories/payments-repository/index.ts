import { Payment } from '@prisma/client';
import { prisma } from '@/config';

async function findPaymentByTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId: ticketId,
    },
  });
}

async function createPayment(payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.payment.create({
    data: payment,
  });
}

const paymentsRepository = {
  findPaymentByTicketId,
  createPayment,
};

export default paymentsRepository;
