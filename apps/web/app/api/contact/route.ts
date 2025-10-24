import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@repo/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    const fullName = `${firstName} ${lastName}`;

    // Generate HTML email template
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission - Velgance Agency</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; background: white;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #000000 0%, #333333 100%); padding: 40px 20px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700;">
              Velgance Agency
            </h1>
            <p style="margin: 8px 0 0 0; color: #cccccc; font-size: 16px;">
              New Contact Form Submission
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 32px 20px;">
            <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 24px; font-weight: 600;">
              Contact Form Submission
            </h2>
            
            <div style="background: #f0f0f0; border-left: 4px solid #000000; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
              <p style="margin: 0; color: #374151; font-size: 16px; font-weight: 600;">
                ${fullName}
              </p>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">
                ${email}
              </p>
              ${phone ? `<p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">${phone}</p>` : ''}
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 18px; font-weight: 600;">
                Subject: ${subject}
              </h3>
            </div>

            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <h3 style="margin: 0 0 12px 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                Message:
              </h3>
              <div style="color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                This message was sent from the Velgance Agency contact form.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using the same pattern as model applications
    const emailData = {
      from: process.env.RESEND_FROM || 'info@velgance.com',
      to: ['info@velgance.com'],
      subject: `📧 Contact Form: ${subject} - ${fullName}`,
      html: emailHTML,
      replyTo: email,
    };

    console.log('Sending contact email:', { fullName, email, subject });
    
    const result = await resend.emails.send(emailData);
    console.log('Contact email sent successfully:', result);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
