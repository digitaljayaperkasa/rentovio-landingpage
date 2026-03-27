'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, MessageCircle, Loader2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

function ThanksContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const status = searchParams.get('status');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full rounded-3xl border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-8 flex justify-center">
          <div className="bg-white/20 p-4 rounded-full">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-black">Terima Kasih!</CardTitle>
          <CardDescription>Pesanan Anda telah kami terima.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="p-4 bg-slate-100 rounded-2xl">
            <p className="text-sm text-slate-500 mb-1">Order ID</p>
            <p className="font-mono font-bold text-slate-900">{orderId || 'N/A'}</p>
          </div>
          <p className="text-slate-600 text-sm">
            Tim kami akan segera menghubungi Anda melalui WhatsApp untuk proses selanjutnya. 
            Pastikan nomor WhatsApp Anda aktif.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Link 
            href="https://wa.me/6281234567890?text=Halo%20Rentavio,%20saya%20sudah%20melakukan%20pembayaran%20dengan%20Order%20ID:%20" 
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold rounded-xl flex items-center justify-center"
            )}
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Konfirmasi via WhatsApp
          </Link>
          <Link 
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full h-12 font-bold rounded-xl flex items-center justify-center"
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
      </div>
    }>
      <ThanksContent />
    </Suspense>
  );
}
