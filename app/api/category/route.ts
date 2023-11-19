import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async () => {
  const categories = await prisma.category.findMany({
    select: {
      categoryName: true,
      slug: true,
      id: true,
    },
  });
  return NextResponse.json(categories);
};
