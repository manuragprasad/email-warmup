import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const servers = await prisma.sMTPServer.findMany();
  return NextResponse.json(servers);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const server = await prisma.sMTPServer.create({ data });
  return NextResponse.json(server);
}