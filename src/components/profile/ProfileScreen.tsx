import { earnings, relationshipManager, userGreeting } from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import {
  IconChevronRight,
  IconDocument,
  IconPhone,
  IconTabProfile,
} from '../icons/DashboardIcons';
import { MainScreenHeader } from '../layout/MainScreenHeader';
import styles from './ProfileScreen.module.css';

export function ProfileScreen() {
  const { open } = useNavigation();

  return (
    <>
      <MainScreenHeader title="Profile" />
      <div className={styles.page}>
      <div className={styles.hero}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${userGreeting.avatarUrl})` }}
          role="img"
          aria-label={`${userGreeting.name} profile photo`}
        />
        <h2 className={styles.name}>{userGreeting.name}</h2>
        <span className={styles.tierPill}>{userGreeting.tierLabel}</span>
        <p className={styles.heroSub}>{relationshipManager.subtitle}</p>
      </div>

      <div className={styles.stats} aria-label="This month summary">
        <div className={styles.stat}>
          <span className={styles.statValue}>{earnings.amountFormatted}</span>
          <span className={styles.statLabel}>Earnings</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{earnings.policiesSold}</span>
          <span className={styles.statLabel}>Policies</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{earnings.payoutsCount}</span>
          <span className={styles.statLabel}>Payouts</span>
        </div>
      </div>

      <h2 className={styles.sectionLabel}>Account</h2>
      <div className={styles.group}>
        <button
          type="button"
          className={styles.row}
          onClick={() => open({ type: 'profile' })}
        >
          <span className={styles.rowIcon} aria-hidden>
            <IconTabProfile size={20} />
          </span>
          <span className={styles.rowBody}>
            <span className={styles.rowTitle}>Personal details</span>
            <span className={styles.rowMeta}>Name, phone, agent ID</span>
          </span>
          <span className={styles.rowRight} aria-hidden>
            <IconChevronRight size={18} />
          </span>
        </button>
        <button
          type="button"
          className={styles.row}
          onClick={() => open({ type: 'documents' })}
        >
          <span className={styles.rowIcon} aria-hidden>
            <IconDocument size={20} />
          </span>
          <span className={styles.rowBody}>
            <span className={styles.rowTitle}>Documents</span>
            <span className={styles.rowMeta}>Statements, agreements, TDS</span>
          </span>
          <span className={styles.rowRight} aria-hidden>
            <IconChevronRight size={18} />
          </span>
        </button>
        <button
          type="button"
          className={styles.row}
          onClick={() => open({ type: 'callRm' })}
        >
          <span className={styles.rowIcon} aria-hidden>
            <IconPhone size={20} />
          </span>
          <span className={styles.rowBody}>
            <span className={styles.rowTitle}>Partner support</span>
            <span className={styles.rowMeta}>{relationshipManager.name}</span>
          </span>
          <span className={styles.rowRight} aria-hidden>
            <IconChevronRight size={18} />
          </span>
        </button>
      </div>

      <button type="button" className={styles.signOut}>
        Sign out
      </button>
      </div>
    </>
  );
}
