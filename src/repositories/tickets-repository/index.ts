import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function findTicketsType() {
  return prisma.ticketType.findMany();
}

async function findTicketByUserId(userId: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: userId,
      },
    },
  });
}

async function createTicket(ticket: Prisma.TicketCreateInput) {
  return prisma.ticket.create({
    data: ticket,
  });
}

const ticketsRepository = {
  findTicketsType,
  findTicketByUserId,
  createTicket,
};

export default ticketsRepository;
