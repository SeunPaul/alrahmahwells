# NOWPayments Integration Setup Guide

## Environment Variables Required

Add these variables to your `.env.local` file:

```bash
# NOWPayments Configuration
# Get your API key from: https://nowpayments.io/dashboard/settings/api-keys
NOWPAYMENTS_API_KEY=your_api_key_here

# Optional: Your payout wallet address for automatic payouts
NOWPAYMENTS_PAYOUT_ADDRESS=your_wallet_address_here

# Webhook URL for payment notifications
# This will be automatically set to: https://yourdomain.com/api/crypto-payment-webhook
NOWPAYMENTS_IPN_URL=https://yourdomain.com/api/crypto-payment-webhook

# Base URL for your application
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Setup Steps

### 1. Create NOWPayments Account

- Visit [NOWPayments](https://nowpayments.io/) and sign up
- Complete email verification
- Complete KYC verification if required

### 2. Configure Payout Wallets

- Go to **Settings** > **Payments** > **Payout wallets**
- Add your cryptocurrency wallet addresses where you want to receive donations
- Supported currencies: USDT, BTC, ETH, and many others

### 3. Generate API Key

- Navigate to **Settings** > **Payments** > **API keys**
- Click "Add a new key"
- Copy the generated API key
- Add it to your `.env.local` file

### 4. Configure Webhook URL

- In your NOWPayments dashboard, go to **Settings** > **Payments** > **IPN Settings**
- Set the IPN URL to: `https://yourdomain.com/api/crypto-payment-webhook`
- This will receive payment status notifications

### 5. Test Integration

- Use NOWPayments test mode for initial testing
- Make a small test donation to verify the flow
- Check that webhooks are received correctly

## Features Implemented

✅ **Crypto Donation Form**

- Support for USDT, BTC, ETH
- Amount input with USD conversion
- Donor information collection
- Secure form validation

✅ **Payment Processing**

- Integration with NOWPayments API
- Automatic payment URL generation
- Secure redirect to payment page

✅ **Webhook Handling**

- Payment status notifications
- Success/failure/refund handling
- Logging and error handling

✅ **User Experience**

- Modal form with clean UI
- RTL support for Arabic
- Loading states and error handling
- Security notices and trust indicators

## Testing

1. **Test Mode**: Use NOWPayments test environment first
2. **Small Amounts**: Start with small test donations
3. **Webhook Testing**: Use tools like ngrok for local webhook testing
4. **Multiple Currencies**: Test with different cryptocurrencies

## Security Notes

- API keys are stored securely in environment variables
- All payments are processed through NOWPayments secure infrastructure
- Webhook signatures can be verified for additional security
- No sensitive data is stored locally

## Support

- NOWPayments Documentation: https://documenter.getpostman.com/view/7907941/S1a32n38
- NOWPayments Support: https://nowpayments.io/support
