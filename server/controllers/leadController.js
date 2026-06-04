const Lead = require('../models/Lead');
const { Resend } = require('resend');

// Express controller handler for lead submissions
exports.createLead = async (req, res) => {
  try {
    const { fullName, email, phone, age, audienceType, ...rest } = req.body;

    // Simple validation checks
    if (!fullName || !email || !phone || !audienceType) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: fullName, email, phone, and audienceType are required.',
      });
    }

    // Save lead in MongoDB
    const lead = new Lead({
      fullName,
      email,
      phone,
      age: age ? parseInt(age) : undefined,
      audienceType,
      additionalDetails: rest,
    });

    await lead.save();

    // Prepare all other dynamic form fields for the email
    let allFormFieldsText = '';
    if (Object.keys(rest).length > 0) {
      for (const [key, value] of Object.entries(rest)) {
        if (key !== 'consent') {
          allFormFieldsText += `${key}: ${value}\n`;
        }
      }
    } else {
      allFormFieldsText = 'None';
    }

    const timestampStr = lead.timestamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' (IST)';

    // Construct the HTML Email Body matching exact template requirements
    const emailHtmlBody = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; padding: 24px; border-radius: 8px;">
        <h2 style="color: #10b981; margin-top: 0; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">🚀 New TradeCraft Lead Submission</h2>
        
        <p style="font-size: 15px; margin: 16px 0;"><strong>Audience Type:</strong> ${audienceType}</p>
        
        <div style="background: #f9fafb; padding: 16px; border-radius: 6px; border: 1px solid #f3f4f6; margin-bottom: 20px;">
          <p style="margin: 4px 0;"><strong>Name:</strong> ${fullName}</p>
          <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 4px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 4px 0;"><strong>Age:</strong> ${age || 'N/A'}</p>
        </div>
        
        <p style="font-size: 15px; margin: 0 0 8px 0;"><strong>Additional Details:</strong></p>
        <pre style="background: #f3f4f6; padding: 12px; border-radius: 6px; font-family: monospace; white-space: pre-wrap; font-size: 13px; border: 1px solid #e5e7eb; margin: 0 0 20px 0;">${allFormFieldsText}</pre>
        
        <p style="font-size: 13px; color: #6b7280; margin: 0;"><strong>Submitted At:</strong><br />${timestampStr}</p>
      </div>
    `;

    let emailSent = false;
    let emailError = null;

    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY environment variable is not defined.');
      }
      if (!process.env.ADMIN_EMAIL) {
        throw new Error('ADMIN_EMAIL environment variable is not defined.');
      }

      // Initialize Resend
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'TradeCraft Onboarding <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL,
        subject: '🚀 New TradeCraft Lead Submission',
        html: emailHtmlBody,
      });

      emailSent = true;
    } catch (err) {
      console.error('Email sending failed:', err.message || err);
      emailError = err.message || String(err);
    }

    if (emailSent) {
      return res.status(201).json({
        success: true,
        message: 'Thank you. Your personalized learning plan request has been received.',
        data: lead,
      });
    } else {
      // Partial Success (DB save succeeded but email failed)
      return res.status(201).json({
        success: true,
        partialSuccess: true,
        message: 'Thank you. Your personalized learning plan request has been received.',
        emailError: emailError,
        data: lead,
      });
    }

  } catch (error) {
    console.error('Lead Controller Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process lead submission.',
      error: error.message,
    });
  }
};
