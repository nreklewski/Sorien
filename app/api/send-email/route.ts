import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // Disables Next.js default body parsing to handle files
  },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Extract fields
    const selectedService = formData.get('selectedService') as string;
    const exampleUrls = formData.getAll('exampleUrls') as string[];
    const description = formData.get('description') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const additionalInfo = formData.get('additionalInfo') as string;
    const privacyAccepted = formData.get('privacyAccepted') as string;

    // Prepare email content
    const emailBody = `Nowa wycena ze strony:\n\n
Usługa: ${selectedService}\n
Przykładowe adresy: ${(exampleUrls || []).join(', ')}\n
Opis projektu: ${description}\n
Imię i nazwisko: ${fullName}\nEmail: ${email}\nTelefon: ${phone}\nFirma: ${company}\nDodatkowe informacje: ${additionalInfo}\n\nPolityka prywatności zaakceptowana: ${privacyAccepted === 'true' ? 'Tak' : 'Nie'}\n`;

    // Prepare attachments
    const files = formData.getAll('files') as File[];
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Nowa wycena ze strony',
      text: emailBody,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
