import { NextResponse } from "next/server";

/**
 * POST /api/forms/waiver
 * Accepts waiver form submissions. Wire to GoHighLevel webhook or email later.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: send to GoHighLevel webhook, email, or CRM
    // body: { type: 'shiftwave' | 'energylounger', firstName, lastName, email, phone, dateOfBirth, postalCode, factors: string[], acknowledged: boolean }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
