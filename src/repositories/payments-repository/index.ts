import { Payment, TicketStatus } from '@prisma/client';
import { prisma } from '@/config';

async function findPaymentByTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId: ticketId,
    },
  });
}

async function createPayment(payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) {
  await prisma.ticket.update({
    where: { id: payment.ticketId },
    data: { status: TicketStatus.PAID },
  });

  return prisma.payment.create({
    data: {
      ticketId: payment.ticketId,
      value: payment.value,
      cardIssuer: payment.cardIssuer,
      cardLastDigits: payment.cardLastDigits,
    },
  });
}

const paymentsRepository = {
  findPaymentByTicketId,
  createPayment,
};

export default paymentsRepository;
