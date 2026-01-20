import { Router, Request, Response } from 'express';
import { Resend } from 'resend';

const router = Router();

// Lazy initialization - get Resend instance when needed (after env vars are loaded)
function getResend() {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
        return null;
    }
    return new Resend(RESEND_API_KEY);
}

router.post('/', async (req: Request, res: Response) => {
    const { name, company, phoneNumber, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Name, email, and message are required'
        });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'Invalid email format'
        });
    }

    // Get Resend instance (lazy initialization ensures env vars are loaded)
    const resend = getResend();
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY);

    if (!resend || !RESEND_API_KEY) {
        return res.status(500).json({
            error: 'Email service is not configured',
            details: 'RESEND_API_KEY environment variable is missing'
        });
    }

    try {
        // Send email using Resend
        const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #14213D; border-bottom: 2px solid #2E9CA0; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Email:</strong> ${email}</p>
          ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #14213D;">Message:</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #2E9CA0;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `;

        const emailText = `
New Contact Form Submission

Name: ${name}
${company ? `Company: ${company}` : ''}
Email: ${email}
${phoneNumber ? `Phone: ${phoneNumber}` : ''}

Message:
${message}
    `;

        const result = await resend.emails.send({
            from: 'onboarding@resend.dev', // You'll need to verify your domain with Resend to use a custom email
            to: 'csheen1725@gmail.com',
            subject: `Portfolio Contact: ${name}${company ? ` from ${company}` : ''}`,
            html: emailHtml,
            text: emailText,
            replyTo: email, // This allows you to reply directly to the sender
        });

        if (result.error) {
            console.error('Resend error:', result.error);
            return res.status(500).json({
                error: 'Failed to send email',
                details: result.error.message || 'Unknown error'
            });
        }

        res.json({
            success: true,
            message: 'Email sent successfully',
            id: result.data?.id
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to send email',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

export default router;
