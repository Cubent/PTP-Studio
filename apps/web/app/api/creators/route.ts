import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@repo/database/generated/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const profession = searchParams.get('profession');

    let whereClause: any = { isActive: true };
    
    // Add profession filter if provided
    if (profession) {
      whereClause.profession = profession;
    }
    
    // Add search filter if provided
    if (search) {
      whereClause.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { profession: { contains: search, mode: 'insensitive' } },
        {
          AND: [
            { firstName: { contains: search.split(' ')[0] || '', mode: 'insensitive' } },
            { lastName: { contains: search.split(' ')[1] || '', mode: 'insensitive' } }
          ]
        }
      ];
    }

    const creators = await prisma.creator.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(creators);
  } catch (error) {
    console.error('Error fetching creators:', error);
    return NextResponse.json({ error: 'Failed to fetch creators' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, igProfileLink, image, images, profession, location, experience, portfolio } = body;

    if (!firstName || !lastName || !email || !image || !profession) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const creator = await prisma.creator.create({
      data: {
        firstName,
        lastName,
        email,
        phone: phone || null,
        igProfileLink: igProfileLink || null,
        image,
        images: images || [],
        profession,
        location: location || null,
        experience: experience || null,
        portfolio: portfolio || [],
        isActive: true
      }
    });

    return NextResponse.json(creator);
  } catch (error) {
    console.error('Error creating creator:', error);
    return NextResponse.json({ error: 'Failed to create creator' }, { status: 500 });
  }
}
