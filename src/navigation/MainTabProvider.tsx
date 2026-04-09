import { useMemo, useState, type ReactNode } from 'react';
import type { TabId } from '../data/dashboardData';
import { MainTabContext } from './mainTabContext';

export function MainTabProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<TabId>('dashboard');
  const value = useMemo(() => ({ tab, setTab }), [tab]);
  return <MainTabContext.Provider value={value}>{children}</MainTabContext.Provider>;
}
