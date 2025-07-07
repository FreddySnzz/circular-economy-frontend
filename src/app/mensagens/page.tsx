"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import { useResponsive } from '@/hooks/useResponsive';

export default function MessagesPage() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useResponsive('sm');

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      { 
        isMobile ? (
          <>
            <Navbar className="fixed top-0 left-0 w-full z-50" />
            <main className={`flex-1 w-full pt-14 px-4`}>
              <Dashboard />
            </main>
          </>
        ) : (
          <>
            <Sidebar expanded={expanded} toggleExpanded={toggleExpanded} /> 
            <main
              className={`flex-1 transition-all duration-300 ${
                expanded ? "ml-64" : "ml-16"
              }`}
            >
              <Dashboard />
            </main>
          </>
        )
      }
    </div>
  );
}