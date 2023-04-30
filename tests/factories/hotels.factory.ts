import faker from '@faker-js/faker';
import { prisma } from '@/config';

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.people(),
    },
  });
}

export async function createRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      hotelId,
      name: faker.name.findName(),
      capacity: 3,
    },
  });
}

export async function createRoomFull(hotelId: number) {
  return prisma.room.create({
    data: {
      hotelId,
      name: faker.name.findName(),
      capacity: 1,
    },
  });
}
