import hotelRepository from '@/repositories/hotel-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import { notFoundError, paymentRequiredError } from '@/errors';

async function validateEnrollmentAndTicket(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByUserId(userId);
  if (!ticket) throw notFoundError();

  const isValidTicket = ticket.status === 'PAID' && !ticket.TicketType.isRemote && ticket.TicketType.includesHotel;

  if (!isValidTicket) throw paymentRequiredError();

  return;
}

async function getHotels(userId: number) {
  await validateEnrollmentAndTicket(userId);

  const hotels = await hotelRepository.findAllHotels();
  if (hotels.length === 0) throw notFoundError();

  return { hotels };
}

async function getRoomsByHotelId(hotelId: number, userId: number) {
  await validateEnrollmentAndTicket(userId);

  const hotelRooms = await hotelRepository.findRoomsByHotelId(hotelId);
  if (!hotelRooms) throw notFoundError();

  return { hotelRooms };
}

const hotelsService = {
  getHotels,
  getRoomsByHotelId,
};

export default hotelsService;
