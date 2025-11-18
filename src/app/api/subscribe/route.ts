import { NextResponse } from "next/server";

const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.toString().trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error("Missing MailerLite configuration.");
      return NextResponse.json(
        {
          success: false,
          message: "Subscription service is not configured.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(MAILERLITE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
      }),
    });

    if (!response.ok && response.status !== 409) {
      const errorPayload = await response.json().catch(() => null);
      console.error("MailerLite error:", errorPayload || response.statusText);
      return NextResponse.json(
        {
          success: false,
          message: "Unable to subscribe at the moment.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MailerLite subscribe error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to subscribe at the moment.",
      },
      { status: 500 }
    );
  }
}
