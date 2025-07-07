"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaLeaf,
  FaRecycle,
  FaHome,
  FaEnvelope
} from "react-icons/fa";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${isScrolled
          ? "bg-transparent backdrop-blur-sm text-black"
          : "bg-green-700 text-white"}
        p-4 shadow-md
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <FaRecycle className="text-xl" />
          <span className="font-bold text-lg hidden md:inline">
            Economia Circular
          </span>
        </div>

        <div className="flex gap-6 md:hidden flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-green-200"
          >
            <FaHome className="text-2xl" />
          </Link>
          <Link
            href="/mensagens"
            className="flex items-center gap-1 hover:text-green-200"
          >
            <FaEnvelope className="text-2xl" />
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-1 hover:text-green-200"
          >
            <FaLeaf className="text-2xl" />
          </Link>
        </div>

        <div className="hidden md:flex gap-6 flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-green-200"
          >
            <FaHome /> Página Inicial
          </Link>
          <Link
            href="/mensagens"
            className="flex items-center gap-1 hover:text-green-200"
          >
            <FaEnvelope /> Mensagens
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-1 hover:text-green-200"
          >
            <FaLeaf /> Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
}