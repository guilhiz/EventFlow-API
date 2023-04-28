import { prisma } from '@/config';

async function findAllHotels() {
  return await prisma.hotel.findMany();
}

async function findRoomsByHotelId(hotelId: number) {
  return await prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

async function findRoomByRoomId(roomId: number) {
  return prisma.room.findFirst({
    where: { id: roomId },
    include: { Booking: true },
  });
}

const hotelRepository = {
  findAllHotels,
  findRoomsByHotelId,
  findRoomByRoomId,
};

export default hotelRepository;
