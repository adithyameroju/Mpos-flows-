import { EndorsementsSection } from './EndorsementsSection';
import { HeroSection } from './HeroSection';
import { NeedHelpSection } from './NeedHelpSection';
import { PolicyStatusSection } from './PolicyStatusSection';
import { QuickActionsSection } from './QuickActionsSection';
import { WhatsNewSection } from './WhatsNewSection';
import styles from './MobileDashboard.module.css';

export function DashboardHome() {
  return (
    <>
      <HeroSection />
      <div className={styles.bands}>
        <div className={`${styles.band} ${styles.bandDefault}`}>
          <QuickActionsSection />
        </div>
        <div className={`${styles.band} ${styles.bandMuted}`}>
          <PolicyStatusSection />
        </div>
        <div className={`${styles.band} ${styles.bandAccent}`}>
          <EndorsementsSection />
        </div>
        <div className={`${styles.band} ${styles.bandDefault}`}>
          <NeedHelpSection />
        </div>
        <div className={`${styles.band} ${styles.bandMuted}`}>
          <WhatsNewSection />
        </div>
      </div>
    </>
  );
}
