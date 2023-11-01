import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async () => {
  const vendor = await prisma.category.findMany({
    take: 5,
    include: {
      vendors: {
        include: {
          vendor: true,
        },
      },
    },
  });
  return NextResponse.json(vendor);
};
