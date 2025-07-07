"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function MessagesPage() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-green-50">
      <Sidebar expanded={expanded} toggleExpanded={toggleExpanded} />
      <div
        className={`flex-1 transition-all duration-300 ${
          expanded ? "ml-64" : "ml-16"
        }`}
      >
        <Dashboard />
      </div>
    </div>
  );
}
