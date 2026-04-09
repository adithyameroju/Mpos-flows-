import { createContext } from 'react';
import type { TabId } from '../data/dashboardData';

export type MainTabContextValue = {
  tab: TabId;
  setTab: (id: TabId) => void;
};

export const MainTabContext = createContext<MainTabContextValue | null>(null);
