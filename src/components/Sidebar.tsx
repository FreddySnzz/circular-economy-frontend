"use client";

import Link from "next/link";
import {
  FaRecycle,
  FaHome,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Footer from "./Footer";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  expanded: boolean;
  toggleExpanded: () => void;
}

export default function Sidebar({
  expanded,
  toggleExpanded,
  className,
}: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-green-700 text-white transition-all duration-300 ${
        expanded ? "w-64" : "w-16"
      } ${className}`}
    >
      <div className="flex flex-col h-full p-4 items-left">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            {expanded ? (
              <FaRecycle className={expanded ? "text-2xl" : "text-2xl"} />
            ) : null}
            {expanded && (
              <span className="font-bold text-xl">Economia Circular</span>
            )}
          </div>
          <button
            onClick={toggleExpanded}
            className={ expanded ? "text-white hover:text-green-300 transition ml-auto" : "text-white hover:text-green-300 transition"}
          >
            {expanded ? <FaTimes /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        <nav className={expanded ? "flex flex-col gap-4" : "flex flex-col gap-4 items-center"}>
          <Link
            href="/"
            className="flex items-center gap-4 hover:text-green-200 transition"
          >
            <FaHome className={expanded ? "text-2xl" : "text-2xl"} />
            {expanded && <span>Página Inicial</span>}
          </Link>
          <Link
            href="/messages"
            className="flex items-center gap-4 hover:text-green-200 transition font-bold"
          >
            <FaEnvelope className={expanded ? "text-2xl" : "text-2xl"} />
            {expanded && <span>Mensagens</span>}
          </Link>
        </nav>

        {expanded && (
          <div className="mt-auto text-xs text-gray-300">
            <Footer type="sidebar" />
          </div>
        )}
      </div>
    </aside>
  );
}
