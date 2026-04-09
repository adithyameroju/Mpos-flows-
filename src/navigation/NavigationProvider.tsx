import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { NavigationContext } from './navigationContext';
import { SubPageOverlay } from './SubPageOverlay';
import type { SubPage } from './types';

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<SubPage[]>([]);

  const open = useCallback((page: SubPage) => {
    setStack([page]);
  }, []);

  const push = useCallback((page: SubPage) => {
    setStack((s) => [...s, page]);
  }, []);

  const pop = useCallback(() => {
    setStack((s) => (s.length <= 1 ? [] : s.slice(0, -1)));
  }, []);

  const close = useCallback(() => {
    setStack([]);
  }, []);

  const top = stack.length > 0 ? stack[stack.length - 1] : null;

  const value = useMemo(
    () => ({
      subPage: top,
      stackDepth: stack.length,
      open,
      push,
      pop,
      close,
    }),
    [top, stack.length, open, push, pop, close],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
      {top ? <SubPageOverlay page={top} onBack={pop} /> : null}
    </NavigationContext.Provider>
  );
}
