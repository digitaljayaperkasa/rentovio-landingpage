'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import Image from 'next/image';
import { Loader2, MessageCircle, CreditCard, CheckCircle2 } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  websiteName: z.string().min(3, { message: "Nama website minimal 3 karakter" }),
  customerName: z.string().min(3, { message: "Nama lengkap minimal 3 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  phoneNumber: z.string().min(10, { message: "Nomor telepon minimal 10 digit" }),
  paymentMethod: z.string().min(1, { message: "Pilih metode pembayaran" }),
});

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: {
    name: string;
    price: number;
    priceLabel: string;
  } | null;
}

export function CheckoutModal({ isOpen, onClose, packageDetails }: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  const [loadingMethods, setLoadingMethods] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteName: "",
      customerName: "",
      email: "",
      phoneNumber: "",
      paymentMethod: "",
    },
  });

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      if (!packageDetails) return;
      setLoadingMethods(true);
      try {
        const response = await axios.get(`/api/duitku/payment-methods?amount=${packageDetails.price}`);
        setPaymentMethods(response.data);
      } catch (error) {
        console.error('Failed to fetch payment methods:', error);
      } finally {
        setLoadingMethods(false);
      }
    };

    if (isOpen && packageDetails) {
      fetchPaymentMethods();
    }
  }, [isOpen, packageDetails]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!packageDetails) return;
    setLoading(true);
    try {
      const response = await axios.post('/api/duitku/create-invoice', {
        amount: packageDetails.price,
        productDetails: `Paket ${packageDetails.name} - ${values.websiteName}`,
        email: values.email,
        phoneNumber: values.phoneNumber,
        customerName: values.customerName,
        paymentMethod: values.paymentMethod,
      });

      if (response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Terjadi kesalahan saat membuat pesanan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  if (!packageDetails) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto rounded-3xl p-0 border-none shadow-2xl">
        <div className="bg-blue-600 p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-white">Konfirmasi Pesanan</DialogTitle>
            <DialogDescription className="text-blue-100">
              Lengkapi data di bawah untuk melanjutkan ke pembayaran.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Paket Terpilih</p>
              <div className="flex justify-between items-center">
                <p className="font-black text-slate-900 text-lg">{packageDetails.name}</p>
                <p className="font-black text-blue-600 text-lg">{packageDetails.priceLabel}</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="websiteName" className="font-bold text-slate-700">Nama Website Anda</Label>
                <Input 
                  id="websiteName" 
                  placeholder="Contoh: Rental Mobil Bali" 
                  className="rounded-xl h-12 border-slate-200 focus:ring-blue-600"
                  {...form.register("websiteName")}
                />
                {form.formState.errors.websiteName && (
                  <p className="text-xs text-red-500 font-medium">{form.formState.errors.websiteName.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="customerName" className="font-bold text-slate-700">Nama Lengkap</Label>
                <Input 
                  id="customerName" 
                  placeholder="Nama Anda" 
                  className="rounded-xl h-12 border-slate-200 focus:ring-blue-600"
                  {...form.register("customerName")}
                />
                {form.formState.errors.customerName && (
                  <p className="text-xs text-red-500 font-medium">{form.formState.errors.customerName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-bold text-slate-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@anda.com" 
                    className="rounded-xl h-12 border-slate-200 focus:ring-blue-600"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-red-500 font-medium">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phoneNumber" className="font-bold text-slate-700">WhatsApp</Label>
                  <Input 
                    id="phoneNumber" 
                    placeholder="081234567890" 
                    className="rounded-xl h-12 border-slate-200 focus:ring-blue-600"
                    {...form.register("phoneNumber")}
                  />
                  {form.formState.errors.phoneNumber && (
                    <p className="text-xs text-red-500 font-medium">{form.formState.errors.phoneNumber.message}</p>
                  )}
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid gap-4">
              <Label className="font-bold text-slate-700">Metode Pembayaran</Label>
              {loadingMethods ? (
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
                </div>
              ) : (
                <RadioGroup 
                  onValueChange={(value) => form.setValue("paymentMethod", value)}
                  className="grid grid-cols-2 gap-3"
                >
                  {paymentMethods.map((method) => (
                    <div key={method.paymentMethod}>
                      <RadioGroupItem
                        value={method.paymentMethod}
                        id={method.paymentMethod}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={method.paymentMethod}
                        className="flex flex-col items-center justify-between rounded-2xl border-2 border-slate-100 bg-white p-4 hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 cursor-pointer transition-all"
                      >
                        <div className="relative h-8 w-full mb-2">
                          <Image 
                            src={method.paymentImage} 
                            alt={method.paymentName} 
                            fill
                            className="object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[10px] font-bold text-center text-slate-600 uppercase tracking-tighter leading-none">
                          {method.paymentName}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
              {form.formState.errors.paymentMethod && (
                <p className="text-xs text-red-500 font-medium">{form.formState.errors.paymentMethod.message}</p>
              )}
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-black rounded-2xl shadow-lg shadow-blue-200"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Memproses...
                </>
              ) : (
                <>
                  Bayar Sekarang <CreditCard className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
