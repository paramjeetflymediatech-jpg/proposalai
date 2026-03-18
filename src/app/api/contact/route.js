import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, role, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // SMTP Configuration using user-provided EMAIL_ variables
    const transporter = nodemailer.createTransport({
      service: "gmail", // User provided a gmail address
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Notification Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to the user's gmail by default or CONTACT_RECEIVER_EMAIL
      subject: `New Lead: Demo Request from ${name}`,
      text: `
        New Demo Request Received:
        
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Role: ${role || "Not specified"}
        Challenge/Message: ${message || "No message provided"}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1;">New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Role:</strong> ${role || "Not specified"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f9fafb; padding: 15px; border-radius: 5px;">${message || "No message provided"}</p>
        </div>
      `,
    };

    // 2. Confirmation Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Demo Request Received – ProposalAI`,
      text: `Hi ${name},\n\nThanks for reaching out! We've received your request for a demo of ProposalAI. Our team will review your details and get back to you within 24 hours to schedule a time.\n\nBest regards,\nThe ProposalAI Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1;">We've Received Your Request!</h2>
          <p>Hi ${name},</p>
          <p>Thanks for your interest in ProposalAI! We've received your request for a personalized demo.</p>
          <p>Our team is reviewing your information and will reach out to you within <strong>one business day</strong> to confirm a time that works for you.</p>
          <p>In the meantime, feel free to check out our <a href="https://proposalai.com/platform" style="color: #6366f1;">Platform Overview</a>.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>The ProposalAI Team</strong></p>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { success: true, message: "Demo booked successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed SMTP Error:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    return NextResponse.json(
      { error: `Failed to send email: ${error.message || "Unknown error"}. Check your SMTP credentials and App Password.` },
      { status: 500 }
    );
  }
}
