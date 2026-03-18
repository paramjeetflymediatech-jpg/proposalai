import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, role, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // In production: send email, save to DB, add to CRM, etc.
    console.log("Demo booking received:", { name, email, company, role, message });

    return NextResponse.json(
      { success: true, message: "Demo booked successfully. We'll be in touch within 24 hours!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
