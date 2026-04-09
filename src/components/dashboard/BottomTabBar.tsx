import type { ReactNode } from 'react';
import type { TabId } from '../../data/dashboardData';
import { bottomTabs } from '../../data/dashboardData';
import {
  IconTabDashboard,
  IconTabGrowth,
  IconTabProfile,
  IconTabSearch,
  IconTabTraining,
} from '../icons/DashboardIcons';
import styles from './BottomTabBar.module.css';

function TabIcon({ id, active }: { id: TabId; active: boolean }) {
  const c = active ? styles.iconOn : styles.iconOff;
  const s = 24;
  let icon: ReactNode = null;
  switch (id) {
    case 'dashboard':
      icon = <IconTabDashboard className={c} size={s} />;
      break;
    case 'search':
      icon = <IconTabSearch className={c} size={s} />;
      break;
    case 'training':
      icon = <IconTabTraining className={c} size={s} />;
      break;
    case 'growth':
      icon = <IconTabGrowth className={c} size={s} />;
      break;
    case 'profile':
      icon = <IconTabProfile className={c} size={s} />;
      break;
    default:
      break;
  }
  return <span className={styles.iconSlot}>{icon}</span>;
}

type Props = {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
};

export function BottomTabBar({ activeTab, onTabChange }: Props) {
  return (
    <nav className={styles.bar} aria-label="Primary">
      <div className={styles.inner}>
        {bottomTabs.map((t) => {
          const active = activeTab === t.id;
          const activeClass = active ? styles.itemActive : styles.item;
          return (
            <button
              key={t.id}
              type="button"
              className={activeClass}
              onClick={() => onTabChange(t.id)}
              aria-current={active ? 'page' : undefined}
            >
              <TabIcon id={t.id} active={active} />
              <span className={styles.label}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
