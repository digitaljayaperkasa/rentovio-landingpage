import { NextResponse } from 'next/server';
import { verifyCallback } from '@/lib/duitku';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const payload: any = {};
    data.forEach((value, key) => {
      payload[key] = value;
    });

    console.log('Duitku Callback Payload:', payload);

    if (!verifyCallback(payload)) {
      console.error('Invalid Duitku signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    if (payload.resultCode === '00') {
      // Payment successful
      // Here you would update your database
      console.log(`Payment successful for order: ${payload.merchantOrderId}`);
    } else {
      console.log(`Payment failed for order: ${payload.merchantOrderId}, code: ${payload.resultCode}`);
    }

    return NextResponse.json({ message: 'OK' });
  } catch (error) {
    console.error('Callback Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
