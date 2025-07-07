'use client';

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AOS from "aos";

import "aos/dist/aos.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
    });
  }, []);

  return (
    <html lang="pt-br">
      <body className="overflow-x-hidden w-full">
        <ToastContainer 
        position="top-right" 
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 9999
        }} 
        autoClose={4000} />
        {children}
      </body>
    </html>
  );
}