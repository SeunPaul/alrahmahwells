import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verify the webhook signature if needed (NOWPayments provides this)
    const signature = request.headers.get("x-nowpayments-sig");

    // Log the webhook for debugging
    console.log("NOWPayments webhook received:", body);

    // Process different payment statuses
    switch (body.payment_status) {
      case "finished":
        // Payment completed successfully
        await handleSuccessfulPayment(body);
        break;
      case "partially_paid":
        // Partial payment received
        await handlePartialPayment(body);
        break;
      case "failed":
        // Payment failed
        await handleFailedPayment(body);
        break;
      case "refunded":
        // Payment was refunded
        await handleRefundedPayment(body);
        break;
      default:
        console.log("Unhandled payment status:", body.payment_status);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { success: false, error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

async function handleSuccessfulPayment(paymentData: any) {
  try {
    // Log successful payment
    console.log("Payment successful:", {
      order_id: paymentData.order_id,
      payment_id: paymentData.payment_id,
      amount: paymentData.actually_paid,
      currency: paymentData.pay_currency,
      customer_email: paymentData.customer_email,
    });

    // Here you can:
    // 1. Send confirmation email to donor
    // 2. Update your database
    // 3. Send notification to your team
    // 4. Update donation statistics

    // Example: Send confirmation email (implement your email service)
    // await sendDonationConfirmationEmail(paymentData);

    // Example: Update database (implement your database logic)
    // await updateDonationRecord(paymentData);
  } catch (error) {
    console.error("Error handling successful payment:", error);
  }
}

async function handlePartialPayment(paymentData: any) {
  console.log("Partial payment received:", paymentData);
  // Handle partial payment logic
}

async function handleFailedPayment(paymentData: any) {
  console.log("Payment failed:", paymentData);
  // Handle failed payment logic
}

async function handleRefundedPayment(paymentData: any) {
  console.log("Payment refunded:", paymentData);
  // Handle refund logic
}
