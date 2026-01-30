import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const service = formData.get('service') as string;
    const budget = formData.get('budget') as string;
    const urgency = formData.get('urgency') as string;
    const message = formData.get('message') as string;

    // Log the contact form submission
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      company,
      service,
      budget,
      urgency,
      message
    });

    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
