'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  MessageCircle, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Search, 
  BarChart3, 
  Car, 
  Bike, 
  Wrench,
  ChevronRight,
  Star,
  Flame,
  Globe,
  LayoutDashboard,
  Settings,
  ArrowRight
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { CheckoutModal } from '@/components/CheckoutModal';

const WHATSAPP_URL = "https://wa.me/6281234567890?text=Halo%20Rentavio,%20saya%20tertarik%20buat%20website%20rental.";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState<{
    name: string;
    price: number;
    priceLabel: string;
  } | null>(null);

  const openCheckout = (pkg: { name: string; price: number; priceLabel: string }) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-white/80 backdrop-blur-md border-t border-slate-200">
        <Link 
          href={WHATSAPP_URL}
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg h-12 text-lg font-bold flex items-center justify-center"
          )}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Mulai Sekarang
        </Link>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-blue-600">RENTAVIO</span>
            <span className="text-xs font-medium text-slate-400 hidden sm:inline">by JetweB</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#problem" className="hover:text-blue-600 transition-colors">Masalah</Link>
            <Link href="#solution" className="hover:text-blue-600 transition-colors">Solusi</Link>
            <Link href="#features" className="hover:text-blue-600 transition-colors">Fitur</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Harga</Link>
          </div>
          <Link 
            href={WHATSAPP_URL}
            className={cn(
              buttonVariants(),
              "bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex items-center justify-center"
            )}
          >
            Konsultasi Gratis
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                  <Zap className="h-3.5 w-3.5 mr-1 fill-blue-700" /> ⚡ Setup 1–3 Hari
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 px-3 py-1">
                  <MessageCircle className="h-3.5 w-3.5 mr-1 fill-green-700" /> 📲 Booking WhatsApp Langsung
                </Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200 px-3 py-1">
                  <Smartphone className="h-3.5 w-3.5 mr-1" /> 📱 Mobile Friendly
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Website Rental Siap Terima <span className="text-blue-600">Booking</span> dalam 1–3 Hari
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Bukan sekadar website. Ini mesin booking otomatis untuk bisnis rental Anda. Dirancang khusus untuk konversi tinggi.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href={WHATSAPP_URL}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg font-bold shadow-xl shadow-blue-200 w-full sm:w-auto flex items-center justify-center"
                  )}
                >
                  Mulai Sekarang
                </Link>
                <Link 
                  href={WHATSAPP_URL}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 px-8 text-lg font-semibold w-full sm:w-auto border-2 flex items-center justify-center"
                  )}
                >
                  Konsultasi Gratis
                </Link>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
                <Car className="h-8 w-8" />
                <Bike className="h-8 w-8" />
                <Wrench className="h-8 w-8" />
                <TrendingUp className="h-8 w-8" />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Kenapa Banyak Bisnis Rental Sepi Booking?
            </h2>
            <p className="text-slate-500">Mungkin Anda mengalami satu atau lebih dari masalah klasik ini:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: MessageCircle, title: "Masih Balas Manual", desc: "Capek balas chat satu-satu di WhatsApp hanya untuk tanya ketersediaan." },
              { icon: ShieldCheck, title: "Kurang Profesional", desc: "Customer ragu karena tidak ada katalog unit yang jelas dan terpercaya." },
              { icon: Search, title: "Tidak Muncul di Google", desc: "Calon customer di kota Anda tidak bisa menemukan jasa rental Anda." },
              { icon: BarChart3, title: "Promosi Tidak Closing", desc: "Sudah bayar iklan mahal tapi customer bingung cara bookingnya." },
              { icon: Smartphone, title: "Tampilan Berantakan", desc: "Website lama lemot dan susah dibuka dari HP, customer langsung kabur." },
              { icon: Clock, title: "Kehilangan Waktu", desc: "Waktu habis urus administrasi manual daripada fokus nambah unit." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-blue-800 font-bold text-lg">
                &quot;Masalahnya bukan di unit Anda, tapi di sistem penjualannya.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-500 text-white border-blue-400 mb-6 px-4 py-1.5 text-sm font-bold uppercase tracking-widest">
                Solusi Kami
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
                Solusi Website Rental yang Langsung Menghasilkan Booking
              </h2>
              <ul className="space-y-6">
                {[
                  "Website sudah terstruktur khusus untuk jualan rental.",
                  "Customer langsung klik → WhatsApp → booking otomatis.",
                  "Tidak perlu skill teknis, kami yang urus semuanya.",
                  "Dibangun dengan teknologi Next.js → Super cepat & ringan."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/20 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg text-blue-50 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link 
                  href={WHATSAPP_URL}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/20 flex items-center justify-center"
                  )}
                >
                  Konsultasi Sekarang
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src="https://picsum.photos/seed/rental-dashboard/800/600" 
                  alt="Rental Dashboard Preview" 
                  width={800} 
                  height={600}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Kenapa Rentavio Berbeda?
            </h2>
            <p className="text-slate-500">Kami memberikan lebih dari sekadar desain website cantik.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MessageCircle, title: "Booking Instan WhatsApp", desc: "Integrasi langsung ke WhatsApp dengan format pesan otomatis yang rapi." },
              { icon: Clock, title: "Setup Cepat 1–3 Hari", desc: "Tidak perlu menunggu berbulan-bulan. Website Anda live dalam hitungan hari." },
              { icon: Zap, title: "Bisa Upgrade Kapan Saja", desc: "Mulai dari yang simpel, upgrade ke sistem manajemen lengkap saat bisnis tumbuh." },
              { icon: TrendingUp, title: "Siap Iklan & SEO", desc: "Struktur website yang ramah Google dan siap dipasang Meta Pixel / Google Ads." },
              { icon: Car, title: "Multi Vehicle Support", desc: "Tampilkan banyak unit (mobil, motor, dll) dengan detail spesifikasi masing-masing." },
              { icon: Smartphone, title: "Mobile-First Design", desc: "90% customer rental booking via HP. Website kami dioptimalkan untuk itu." }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Car className="h-6 w-6 text-blue-600" /> Multi Vehicle Support
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Cocok untuk rental skala kecil sampai besar. Anda bisa menampilkan berbagai jenis unit dengan mudah.
                </p>
                <ul className="space-y-3">
                  {["Tampilkan banyak unit sekaligus", "Detail unit (Tahun, Transmisi, BBM)", "Harga per hari/minggu", "Filter pencarian unit"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="https://picsum.photos/seed/car-rental/600/400" 
                  alt="Multi Vehicle Support" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Pilih Paket Sesuai Kebutuhan Bisnis Anda
            </h2>
            <p className="text-slate-500">Investasi terbaik untuk pertumbuhan bisnis rental Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SimpleRental */}
            <Card className="flex flex-col rounded-3xl border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">SimpleRental</CardTitle>
                <CardDescription>Cocok untuk pemula yang ingin segera online.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-black text-slate-900">Rp 850rb</span>
                  <span className="text-slate-500 text-sm"> / tahun</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Separator className="my-6" />
                <ul className="space-y-4">
                  {["Website Statis", "Booking WhatsApp", "Gratis Domain .com", "Google Analytics", "Search Console", "Setup Cepat"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-2 font-bold rounded-xl"
                  onClick={() => openCheckout({ name: "SimpleRental", price: 850000, priceLabel: "Rp 850rb" })}
                >
                  Pilih Paket Ini
                </Button>
              </CardFooter>
            </Card>

            {/* ProRental */}
            <Card className="flex flex-col rounded-3xl border-blue-600 shadow-xl shadow-blue-100 relative scale-105 z-10 overflow-visible">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1 font-bold">🔥 PALING LARIS</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">ProRental</CardTitle>
                <CardDescription>Sistem dinamis untuk kontrol penuh konten Anda.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-black text-slate-900">Rp 2.45jt</span>
                  <div className="text-xs font-medium text-slate-500 mt-1">Tahun pertama. Selanjutnya Rp 900rb/thn</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Separator className="my-6" />
                <ul className="space-y-4">
                  {["Semua fitur SimpleRental", "Admin Panel (CMS)", "Edit Konten Sendiri", "Sistem Dinamis", "Hosting 5GB", "Meta Pixel"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
                  onClick={() => openCheckout({ name: "ProRental", price: 2450000, priceLabel: "Rp 2.45jt" })}
                >
                  Pilih Paket Ini
                </Button>
              </CardFooter>
            </Card>

            {/* BizRental */}
            <Card className="flex flex-col rounded-3xl border-slate-200 shadow-sm hover:border-blue-200 transition-colors overflow-visible">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-amber-500 text-white px-4 py-1 font-bold">⭐ REKOMENDASI</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">BizRental</CardTitle>
                <CardDescription>Solusi lengkap untuk skala bisnis profesional.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-black text-slate-900">Rp 5.0jt</span>
                  <div className="text-xs font-medium text-slate-500 mt-1">Tahun pertama. Selanjutnya Rp 1.5jt/thn</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Separator className="my-6" />
                <ul className="space-y-4">
                  {["Website Lengkap + Sistem", "SEO Optimization", "Hosting 10GB + cPanel", "Struktur Profesional", "Siap Iklan (Google/FB)", "Prioritas Support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-2 font-bold rounded-xl"
                  onClick={() => openCheckout({ name: "BizRental", price: 5000000, priceLabel: "Rp 5.0jt" })}
                >
                  Pilih Paket Ini
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Add Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight mb-4">Semua Paket Sudah Termasuk</h2>
              <p className="text-slate-500">Standar kualitas tinggi untuk setiap website yang kami bangun.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Smartphone, label: "Mobile Friendly" },
                { icon: Zap, label: "Loading Cepat" },
                { icon: ShieldCheck, label: "SSL Aman (HTTPS)" },
                { icon: MessageCircle, label: "Integrasi WhatsApp" },
                { icon: Settings, label: "Bantuan Setup Awal" },
                { icon: Star, label: "Konsultasi Gratis" },
                { icon: Globe, label: "Garansi Online" },
                { icon: LayoutDashboard, label: "UI Profesional" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <item.icon className="h-8 w-8 text-blue-600 mb-3" />
                  <span className="text-sm font-bold text-slate-700 leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <div className="text-3xl font-black text-blue-600 mb-1">2x</div>
                      <div className="text-sm font-bold text-blue-800">Chat Masuk</div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                      <div className="text-3xl font-black text-green-600 mb-1">40%</div>
                      <div className="text-sm font-bold text-green-800">Booking Rate</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                      <div className="text-3xl font-black text-amber-600 mb-1">100%</div>
                      <div className="text-sm font-bold text-amber-800">Trust Level</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div className="text-3xl font-black text-slate-600 mb-1">24/7</div>
                      <div className="text-sm font-bold text-slate-800">Open for Booking</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                  Apa Hasilnya untuk Bisnis Anda?
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Lebih Banyak Chat Masuk", desc: "Sistem yang memudahkan customer membuat chat Anda tidak pernah sepi." },
                    { title: "Booking Meningkat", desc: "Konversi dari pengunjung menjadi penyewa jauh lebih tinggi." },
                    { title: "Lebih Dipercaya Customer", desc: "Tampilan profesional membuat customer tidak ragu transfer DP." },
                    { title: "Hemat Waktu Operasional", desc: "Kurangi tanya jawab berulang, biarkan website yang menjelaskan unit Anda." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-800 font-bold flex items-center justify-center gap-2 text-lg">
            <Flame className="h-5 w-5 fill-amber-600" /> &quot;Setiap hari tanpa website = kehilangan calon booking&quot;
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Mulai Website Rental Anda Hari Ini
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Tidak perlu mahal. Tidak perlu ribet. Yang penting langsung menghasilkan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={WHATSAPP_URL}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-blue-600 hover:bg-blue-700 text-white h-14 px-10 text-lg font-bold w-full sm:w-auto flex items-center justify-center"
                )}
              >
                Buat Website Sekarang
              </Link>
              <Link 
                href={WHATSAPP_URL}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-14 px-10 text-lg font-bold w-full sm:w-auto border-2 border-white/20 hover:bg-white/10 text-white hover:text-white flex items-center justify-center bg-transparent"
                )}
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Chat WhatsApp
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Zap className="h-6 w-6 text-white fill-white" />
                </div>
                <span className="text-xl font-black tracking-tighter text-blue-600">RENTAVIO</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                Sistem website rental otomatis yang dirancang untuk menghasilkan booking. Solusi digital terbaik untuk UMKM rental di Indonesia.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Globe className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Layanan</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-blue-600">Rental Mobil</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Rental Motor</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Rental Alat Berat</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Travel & Transport</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Kontak</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-blue-600" /> +62 812 3456 7890
                </li>
                <li>Email: hello@jetweb.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400 font-medium">
            <p>© 2024 Rentavio by JetweB. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-slate-600">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-600">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        packageDetails={selectedPackage}
      />
    </div>
  );
}
