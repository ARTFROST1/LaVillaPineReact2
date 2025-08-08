import { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  isInAmenitiesSection: boolean;
  setIsInAmenitiesSection: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isInAmenitiesSection, setIsInAmenitiesSection] = useState(false);

  return (
    <ScrollContext.Provider value={{ isInAmenitiesSection, setIsInAmenitiesSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}