'use client';

import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';

export function ClientBodyProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This ensures the component only runs on client side
  }, []);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
