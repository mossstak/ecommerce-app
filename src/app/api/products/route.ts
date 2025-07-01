import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      productName: true,
      productType: true,
      roastLevel: true,
    },
  });
  return NextResponse.json(products);
}