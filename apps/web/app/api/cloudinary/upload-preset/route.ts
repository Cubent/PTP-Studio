import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const { folder } = await request.json();
    
    // Create a signed upload preset for direct client uploads
    const uploadPreset = await cloudinary.api.create_upload_preset({
      name: 'velgance_portfolios',
      folder: folder || 'velgance/portfolios',
      unsigned: false,
      settings: {
        resource_type: 'image',
        transformation: [
          { width: 1200, height: 1600, crop: 'limit' },
          { quality: 'auto' },
          { format: 'auto' }
        ]
      }
    });

    return NextResponse.json({ 
      success: true, 
      uploadPreset: uploadPreset.name,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME 
    });

  } catch (error) {
    console.error('Error creating upload preset:', error);
    return NextResponse.json(
      { error: 'Failed to create upload preset' },
      { status: 500 }
    );
  }
}
