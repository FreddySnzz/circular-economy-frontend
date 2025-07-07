import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  FaLeaf, 
  FaRecycle, 
  FaHome, 
  FaEnvelope 
} from "react-icons/fa";
import { useResponsive } from '@/hooks/useResponsive';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useResponsive('sm');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={` ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-sm text-black p-4 flex justify-between items-center shadow-md'
          : 'bg-green-700 text-white p-4 flex justify-between items-center shadow-md'
      } ${className}`}>
      <div className="flex items-center gap-2">
        <FaRecycle className="text-xl" />
        <span className="font-bold text-lg">Economia Circular</span>
      </div>
      {
        isMobile ? (
          <div className="flex gap-6">
            <Link href="/" className="flex items-center gap-1 hover:text-green-200">
              <FaHome className="text-2xl" />
            </Link>
            <Link href="/messages" className="flex items-center gap-1 hover:text-green-200">
              <FaEnvelope className="text-2xl" />
            </Link>
            <Link href="#about" className="flex items-center gap-1 hover:text-green-200">
              <FaLeaf className="text-2xl" />
            </Link>
          </div>
        ) : (
          <div className="flex gap-6">
            <Link href="/" className="flex items-center gap-1 hover:text-green-200">
              <FaHome /> Página Inicial
            </Link>
            <Link href="/messages" className="flex items-center gap-1 hover:text-green-200">
              <FaEnvelope /> Mensagens
            </Link>
            <Link href="#about" className="flex items-center gap-1 hover:text-green-200">
              <FaLeaf /> Sobre
            </Link>
          </div>
        )
      }
    </nav>
  )
}