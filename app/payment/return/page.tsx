'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function PaymentReturnContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const merchantOrderId = searchParams.get('merchantOrderId');
  const resultCode = searchParams.get('resultCode');
  
  const status = resultCode === '00' ? 'success' : (resultCode ? 'failed' : 'loading');

  useEffect(() => {
    if (resultCode === '00') {
      // Redirect to thanks page after 3 seconds
      const timer = setTimeout(() => {
        router.push(`/thanks?orderId=${merchantOrderId}&status=success`);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [router, merchantOrderId, resultCode]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full rounded-3xl border-slate-200 shadow-xl overflow-hidden">
        <CardHeader className="text-center">
          {status === 'loading' && (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
              <CardTitle className="text-2xl font-black">Memproses Pembayaran...</CardTitle>
              <CardDescription>Mohon tunggu sebentar, kami sedang memverifikasi transaksi Anda.</CardDescription>
            </div>
          )}
          {status === 'success' && (
            <div className="flex flex-col items-center gap-4">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
              <CardTitle className="text-2xl font-black text-green-600">Pembayaran Berhasil!</CardTitle>
              <CardDescription>Anda akan dialihkan ke halaman terima kasih dalam beberapa detik.</CardDescription>
            </div>
          )}
          {status === 'failed' && (
            <div className="flex flex-col items-center gap-4">
              <XCircle className="h-12 w-12 text-red-600" />
              <CardTitle className="text-2xl font-black text-red-600">Pembayaran Gagal</CardTitle>
              <CardDescription>Transaksi Anda tidak dapat diproses. Silakan coba lagi atau hubungi bantuan.</CardDescription>
            </div>
          )}
        </CardHeader>
        <CardContent className="text-center">
          <div className="p-4 bg-slate-100 rounded-2xl">
            <p className="text-sm text-slate-500 mb-1">Order ID</p>
            <p className="font-mono font-bold text-slate-900">{merchantOrderId || 'N/A'}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentReturnPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
      </div>
    }>
      <PaymentReturnContent />
    </Suspense>
  );
}
