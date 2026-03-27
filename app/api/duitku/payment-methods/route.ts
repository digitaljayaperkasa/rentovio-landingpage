import { NextResponse } from 'next/server';
import { getPaymentMethods } from '@/lib/duitku';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amount = parseInt(searchParams.get('amount') || '0');

  if (!amount) {
    return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
  }

  try {
    const methods = await getPaymentMethods(amount);
    return NextResponse.json(methods);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch payment methods' }, { status: 500 });
  }
}
