import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import DOMPurify from 'isomorphic-dompurify';

// Security configuration
const SECURITY_CONFIG = {
  MAX_REQUEST_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB per file
  MAX_FILES: 5,
  ALLOWED_FILE_TYPES: [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'application/pdf',
    'text/plain',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ],
  RATE_LIMIT_WINDOW: 60 * 60 * 1000, // 1 hour
  RATE_LIMIT_MAX_REQUESTS: 5,
};

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
  return phoneRegex.test(phone);
}

function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') return '';
  const sanitized = DOMPurify.sanitize(input.trim());
  return sanitized.length > maxLength ? sanitized.substring(0, maxLength) : sanitized;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + SECURITY_CONFIG.RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= SECURITY_CONFIG.RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

function validateFile(file: File): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > SECURITY_CONFIG.MAX_FILE_SIZE) {
    return { valid: false, error: 'File too large' };
  }
  
  // Check file type
  if (!SECURITY_CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: 'Invalid file type' };
  }
  
  // Check filename
  const filename = file.name.toLowerCase();
  const dangerousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.vbs', '.js', '.jar'];
  if (dangerousExtensions.some(ext => filename.endsWith(ext))) {
    return { valid: false, error: 'Dangerous file type' };
  }
  
  return { valid: true };
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  const clientIP = req.headers.get('x-forwarded-for') || 
                   req.headers.get('x-real-ip') || 
                   'unknown';
  
  try {
    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' }, 
        { status: 429 }
      );
    }

    // Check request size
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > SECURITY_CONFIG.MAX_REQUEST_SIZE) {
      return NextResponse.json(
        { success: false, error: 'Request too large' }, 
        { status: 413 }
      );
    }

    const formData = await req.formData();

    // Extract and validate required fields
    const selectedService = sanitizeInput(formData.get('selectedService') as string, 200);
    const description = sanitizeInput(formData.get('description') as string, 2000);
    const fullName = sanitizeInput(formData.get('fullName') as string, 100);
    const email = sanitizeInput(formData.get('email') as string, 254);
    const phone = sanitizeInput(formData.get('phone') as string, 20);
    const company = sanitizeInput(formData.get('company') as string, 200);
    const additionalInfo = sanitizeInput(formData.get('additionalInfo') as string, 1000);
    const privacyAccepted = formData.get('privacyAccepted') as string;

    // Validate required fields
    if (!selectedService || !description || !fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' }, 
        { status: 400 }
      );
    }

    // Validate phone format
    if (!validatePhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone format' }, 
        { status: 400 }
      );
    }

    // Validate privacy acceptance
    if (privacyAccepted !== 'true') {
      return NextResponse.json(
        { success: false, error: 'Privacy policy must be accepted' }, 
        { status: 400 }
      );
    }

    // Validate and sanitize URLs
    const exampleUrls = formData.getAll('exampleUrls') as string[];
    const validUrls: string[] = [];
    for (const url of exampleUrls) {
      const sanitizedUrl = sanitizeInput(url, 500);
      if (sanitizedUrl && validateUrl(sanitizedUrl)) {
        validUrls.push(sanitizedUrl);
      }
    }

    // Validate files
    const files = formData.getAll('files') as File[];
    if (files.length > SECURITY_CONFIG.MAX_FILES) {
      return NextResponse.json(
        { success: false, error: `Too many files. Maximum ${SECURITY_CONFIG.MAX_FILES} allowed.` }, 
        { status: 400 }
      );
    }

    const attachments = [];
    for (const file of files) {
      const validation = validateFile(file);
      if (!validation.valid) {
        return NextResponse.json(
          { success: false, error: `File validation failed: ${validation.error}` }, 
          { status: 400 }
        );
      }
      
      try {
        attachments.push({
          filename: sanitizeInput(file.name, 255),
          content: Buffer.from(await file.arrayBuffer()),
        });
      } catch (error) {
        console.error('File processing error:', error);
        return NextResponse.json(
          { success: false, error: 'File processing failed' }, 
          { status: 400 }
        );
      }
    }

    // Prepare secure email content
    const emailBody = `Nowa wycena ze strony:

Usługa: ${selectedService}
Przykładowe adresy: ${validUrls.join(', ') || 'Brak'}
Opis projektu: ${description}
Imię i nazwisko: ${fullName}
Email: ${email}
Telefon: ${phone}
Firma: ${company || 'Brak'}
Dodatkowe informacje: ${additionalInfo || 'Brak'}

Polityka prywatności zaakceptowana: Tak
Data: ${new Date().toLocaleString('pl-PL')}
IP: ${clientIP}
Liczba załączników: ${attachments.length}`;

    // Validate environment variables
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || 
        !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' }, 
        { status: 500 }
      );
    }

    // Setup nodemailer with security options
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Security options
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nowa wycena - ${selectedService} - ${fullName}`,
      text: emailBody,
      attachments,
    });

    // Log successful request
    const processingTime = Date.now() - startTime;
    console.log(`Email sent successfully - IP: ${clientIP}, Time: ${processingTime}ms, Files: ${attachments.length}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`Email send error - IP: ${clientIP}, Time: ${processingTime}ms:`, error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again.' }, 
      { status: 500 }
    );
  }
}