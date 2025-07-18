"use client";

import SimpleForm from "@/components/Form";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CircularInfoSection from "@/components/CircularInfoSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar className="fixed top-0 left-0 w-full z-50"/>
      <CircularInfoSection />
      <SimpleForm />
      <div className="max-sm:text-xs">
        <Footer />
      </div>
    </main>
  );
}
