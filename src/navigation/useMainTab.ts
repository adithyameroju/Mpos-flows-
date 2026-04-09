import { useContext } from 'react';
import { MainTabContext, type MainTabContextValue } from './mainTabContext';

export function useMainTab(): MainTabContextValue {
  const ctx = useContext(MainTabContext);
  if (!ctx) {
    throw new Error('useMainTab must be used within MainTabProvider');
  }
  return ctx;
}
