import { useMainTab } from '../../navigation/useMainTab';
import { GrowthScreen } from '../growth/GrowthScreen';
import { ProfileScreen } from '../profile/ProfileScreen';
import { SearchScreen } from '../search/SearchScreen';
import { TrainingScreen } from '../training/TrainingScreen';
import { BottomTabBar } from './BottomTabBar';
import { DashboardHome } from './DashboardHome';
import styles from './MobileDashboard.module.css';

/**
 * Mobile shell: dashboard home, Growth screen, or tab screens for Search / Training / Profile.
 */
export function MobileDashboard() {
  const { tab, setTab } = useMainTab();

  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        {tab === 'dashboard' && <DashboardHome />}
        {tab === 'growth' && <GrowthScreen />}
        {tab === 'search' && <SearchScreen />}
        {tab === 'training' && <TrainingScreen />}
        {tab === 'profile' && <ProfileScreen />}
      </main>
      <BottomTabBar activeTab={tab} onTabChange={setTab} />
    </div>
  );
}
