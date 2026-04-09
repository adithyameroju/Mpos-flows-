import { createContext } from 'react';
import type { SubPage } from './types';

export type NavigationContextValue = {
  /** Top of the overlay stack (null when closed). */
  subPage: SubPage | null;
  stackDepth: number;
  open: (page: SubPage) => void;
  /** Push another screen while keeping the overlay open (e.g. menu → settings). */
  push: (page: SubPage) => void;
  /** Pop one screen, or close the overlay if only one screen remains. */
  pop: () => void;
  close: () => void;
};

export const NavigationContext = createContext<NavigationContextValue | null>(null);
