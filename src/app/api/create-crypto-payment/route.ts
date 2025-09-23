import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency, donor_name, donor_email, description } = body;

    // Validate required fields
    if (!amount || !currency || !donor_email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // NOWPayments API configuration
    const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY;
    const NOWPAYMENTS_IPN_URL =
      process.env.NOWPAYMENTS_IPN_URL ||
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/crypto-payment-webhook`;

    if (!NOWPAYMENTS_API_KEY) {
      console.error("NOWPAYMENTS_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Payment service not configured" },
        { status: 500 }
      );
    }

    // Create payment request
    const paymentData = {
      price_amount: amount,
      price_currency: "usd",
      pay_currency: currency.toLowerCase(),
      order_id: `donation_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      order_description: description,
      ipn_callback_url: NOWPAYMENTS_IPN_URL,
      case: "success",
      customer_email: donor_email,
      customer_name: donor_name || "Anonymous Donor",
      // Optional: Add your payout wallet address
      payout_address: process.env.NOWPAYMENTS_PAYOUT_ADDRESS,
      payout_currency: currency.toLowerCase(),
    };

    // Call NOWPayments API
    const response = await fetch("https://api.nowpayments.io/v1/payment", {
      method: "POST",
      headers: {
        "x-api-key": NOWPAYMENTS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("NOWPayments API error:", result);
      return NextResponse.json(
        { success: false, error: result.message || "Payment creation failed" },
        { status: response.status }
      );
    }

    // Return payment URL for redirection
    return NextResponse.json({
      success: true,
      payment_url: result.pay_url,
      payment_id: result.payment_id,
      order_id: paymentData.order_id,
    });
  } catch (error) {
    console.error("Crypto payment creation error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
