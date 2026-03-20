import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "../../lib/db"

function sanitize(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, role, help, message, consent } = body;

    // --- Validation ---
    if (!firstName || !lastName || !email || !company || !role || !help || !message) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "You must agree to receive communications." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // --- Sanitize ---
    const safeFirstName = sanitize(firstName);
    const safeLastName  = sanitize(lastName);
    const safeEmail     = sanitize(email);
    const safePhone     = sanitize(phone);
    const safeCompany   = sanitize(company);
    const safeRole      = sanitize(role);
    const safeHelp      = sanitize(help);
    const safeMessage   = sanitize(message);

    // --- Save to MySQL ---
    const [result] = await pool.execute(
      `INSERT INTO demo_requests
        (first_name, last_name, email, phone, company, role, help, message, consent, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [firstName, lastName, email, phone || null, company, role, help, message, consent ? 1 : 0]
    );
    const leadId = result.insertId;

    // --- SMTP ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER;

    // --- Admin Email ---
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: receiverEmail,
      subject: `New Lead #${leadId}: ${firstName} ${lastName} from ${company}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #eee;border-radius:10px;">
          <h2 style="color:#6366f1;">New Contact Form Submission</h2>
          <p style="color:#888;font-size:13px;">Lead ID: #${leadId}</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;color:#888;width:130px;">Name</td><td style="padding:8px;font-weight:600;">${safeFirstName} ${safeLastName}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;color:#888;">Email</td><td style="padding:8px;"><a href="mailto:${safeEmail}" style="color:#6366f1;">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px;color:#888;">Phone</td><td style="padding:8px;">${safePhone || "Not provided"}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;color:#888;">Company</td><td style="padding:8px;font-weight:600;">${safeCompany}</td></tr>
            <tr><td style="padding:8px;color:#888;">Role</td><td style="padding:8px;">${safeRole}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;color:#888;">Help Needed</td><td style="padding:8px;">${safeHelp}</td></tr>
          </table>
          <hr style="border:0;border-top:1px solid #eee;margin:20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background:#f9fafb;padding:15px;border-radius:5px;">${safeMessage}</p>
        </div>
      `,
    };

    // --- User Confirmation Email ---
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `We've received your message – ProposalAI`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #eee;border-radius:10px;">
          <h2 style="color:#6366f1;">We've Received Your Message!</h2>
          <p>Hi ${safeFirstName},</p>
          <p>Thanks for reaching out to ProposalAI! We've received your message and our team will get back to you within <strong>one business day</strong>.</p>
          <table style="width:100%;border-collapse:collapse;margin:16px 0;">
            <tr><td style="padding:8px;color:#888;width:130px;">Topic</td><td style="padding:8px;font-weight:600;">${safeHelp}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;color:#888;">Company</td><td style="padding:8px;font-weight:600;">${safeCompany}</td></tr>
            <tr><td style="padding:8px;color:#888;">Role</td><td style="padding:8px;">${safeRole}</td></tr>
          </table>
          <br/>
          <p>Best regards,</p>
          <p><strong>The ProposalAI Team</strong></p>
        </div>
      `,
    };

    // --- Send emails independently ---
    const emailResults = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    if (emailResults[0].status === "rejected") console.error("Admin email failed:", emailResults[0].reason?.message);
    if (emailResults[1].status === "rejected") console.error("User email failed:", emailResults[1].reason?.message);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", leadId },
      { status: 200 }
    );

  } catch (error) {
    const isDbError = error.code?.startsWith("ER_") || error.code === "ECONNREFUSED";
    console.error("API Error:", { message: error.message, code: error.code });
    return NextResponse.json(
      { error: isDbError ? `Database error: ${error.message}` : `Failed to process request: ${error.message}` },
      { status: 500 }
    );
  }
}