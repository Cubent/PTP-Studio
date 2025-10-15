import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@repo/database/generated/client';
import { sendModelApplicationAdminEmail } from '../../../../services/model-application-email';
import { uploadMultipleImagesToCloudinary } from '../../../../services/cloudinary';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const height = formData.get('height') as string;
    const weight = formData.get('weight') as string;
    const gender = formData.get('gender') as string;
    const instagram = formData.get('instagram') as string;
    const experience = formData.get('experience') as string;
    const availability = formData.get('availability') as string;
    const additionalInfo = formData.get('additionalInfo') as string;
    
    // Get multiple portfolio files
    const portfolioFiles: File[] = [];
    let index = 0;
    while (true) {
      const file = formData.get(`portfolio_${index}`) as File;
      if (!file) break;
      portfolioFiles.push(file);
      index++;
    }

    if (!firstName || !lastName || !email || !location || !height) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti. Compila tutti i campi richiesti.' }, { status: 400 });
    }

    // Upload multiple images to Cloudinary
    let portfolioUrls: string[] = [];
    
    if (portfolioFiles.length > 0) {
      try {
        const uploadResults = await uploadMultipleImagesToCloudinary(
          portfolioFiles,
          `velgance/portfolios/${firstName.toLowerCase()}-${lastName.toLowerCase()}`
        );
        portfolioUrls = uploadResults.map(result => result.secure_url);
      } catch (uploadError) {
        console.error('Error uploading images to Cloudinary:', uploadError);
        return NextResponse.json({ 
          error: 'Errore nel caricamento delle immagini. Riprova con immagini più piccole.'
        }, { status: 500 });
      }
    }

    // Create database entry
    let application;
    try {
      application = await prisma.model.create({
        data: {
          firstName,
          lastName,
          email,
          igProfileLink: instagram || null,
          image: portfolioUrls.length > 0 ? portfolioUrls[0] : 'https://via.placeholder.com/400x600?text=No+Image',
          height: height || null,
          weight: weight || null,
          location: location || null,
          gender: gender || 'female',
          isActive: false, // Applications start as inactive until approved
        }
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ 
        error: 'Errore nel salvataggio della candidatura. Riprova.'
      }, { status: 500 });
    }

    // Send email notifications (non-blocking)
    const emailData = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      location,
      height,
      weight: weight || undefined,
      gender,
      instagram: instagram || undefined,
      experience: experience || undefined,
      availability: availability || undefined,
      additionalInfo: additionalInfo || undefined,
      portfolioUrls: portfolioUrls,
      portfolioFiles: portfolioFiles,
    };

    // Send notification to admin (don't block on email failure)
    sendModelApplicationAdminEmail(emailData).catch(emailError => {
      console.error('Email notification failed:', emailError);
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationId: application.id 
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Errore di connessione. Controlla la tua connessione internet e riprova.' },
      { status: 500 }
    );
  }
}
