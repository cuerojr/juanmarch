'use client'

import Header from "@/app/components/header/header";
import Works from "@/app/components/works/works";
import Contact from "@/app/components/contact/contact";
import Footer from "@/app/components/footer/footer";

import { Toaster } from '@/components/ui/toaster';

export default function Home() {  
  
  return (
    <main id="a-main" className="h-screen w-screen bg-[#fcf6f4] relative">
      <Header />  
      <Works />
      <Contact />
      <Footer />
    </main>
  )
}
