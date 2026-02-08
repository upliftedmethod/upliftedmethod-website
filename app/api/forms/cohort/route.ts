import { NextResponse } from "next/server";

/**
 * POST /api/forms/cohort
 * Accepts Handsome Cohort (and future cohort) lead capture.
 * Body: { source: 'handsome', firstName, lastName, email, phone?, tier? }
 * TODO: send to GoHighLevel webhook, ConvertKit, or email.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { source, firstName, lastName, email, phone, tier } = body;
    if (!firstName || !email) {
      return NextResponse.json(
        { ok: false, error: "First name and email required" },
        { status: 400 }
      );
    }
    // TODO: send to CRM/webhook/email
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
