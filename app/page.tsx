'use client'

import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Navbar from '@/app/components/navbar/navbar';

import { Toaster } from '@/components/ui/toaster';

export default function Home() {  
  
  return (
    <main id="a-main" className="h-screen w-screen bg-[#fcf6f4] relative">        
      <Navbar />
      <Header />  
      <Footer />
    </main>
  )
}
