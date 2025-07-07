import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export function useResponsive(breakpoint: Breakpoint = 'sm'): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const breakpoints = {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoints[breakpoint]);
    };
    
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};