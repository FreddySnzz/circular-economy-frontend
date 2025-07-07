"use client";

import { createContext, useContext, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";

interface GlobalLoadingContextType {
  isLoading: boolean;
  setLoadingPage: (loading: boolean) => void;
}

const GlobalLoadingContext = createContext<GlobalLoadingContextType>({
  isLoading: false,
  setLoadingPage: () => {},
});

export function GlobalLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalLoadingContext.Provider
      value={{
        isLoading,
        setLoadingPage: setIsLoading,
      }}
    >
      {children}
      {isLoading && <LoadingOverlay />}
    </GlobalLoadingContext.Provider>
  );
}

export const useGlobalLoading = () => useContext(GlobalLoadingContext);
