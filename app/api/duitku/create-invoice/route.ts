import { NextResponse } from 'next/server';
import { createInvoice } from '@/lib/duitku';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, productDetails, email, phoneNumber, customerName, paymentMethod } = body;

    if (!amount || !email || !phoneNumber || !customerName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const merchantOrderId = `ORDER-${Date.now()}`;
    const host = request.headers.get('host');
    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;

    const params = {
      paymentAmount: amount,
      merchantOrderId: merchantOrderId,
      productDetails: productDetails || 'Rentavio Subscription',
      email: email,
      phoneNumber: phoneNumber,
      customerVaName: customerName,
      callbackUrl: `${baseUrl}/api/duitku/callback`,
      returnUrl: `${baseUrl}/payment/return?orderId=${merchantOrderId}`,
      paymentMethod: paymentMethod
    };

    const result = await createInvoice(params);

    if (result.paymentUrl) {
      return NextResponse.json({ 
        paymentUrl: result.paymentUrl,
        orderId: merchantOrderId
      });
    } else {
      console.error('Duitku result:', result);
      return NextResponse.json({ error: result.message || 'Failed to create invoice' }, { status: 500 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
