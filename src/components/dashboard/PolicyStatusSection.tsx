import { policyStatus } from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import { IconActivity, IconClock, IconXCircle } from '../icons/DashboardIcons';
import { SectionTitle } from '../ui/SectionTitle';
import { ViewAllButton } from '../ui/ViewAllButton';
import styles from './PolicyStatusSection.module.css';

export function PolicyStatusSection() {
  const { open } = useNavigation();
  return (
    <section className={styles.section} aria-labelledby="policy-status-heading">
      <SectionTitle
        id="policy-status-heading"
        title="Policy status"
        subtitle="Pipeline snapshot · updates in near real time"
      />
      <div className={styles.bento}>
        <button
          type="button"
          className={styles.pending}
          aria-label={`${policyStatus.pending.label}: ${policyStatus.pending.value}`}
          onClick={() => open({ type: 'pendingPolicies' })}
        >
          <div className={styles.pendingTop}>
            <span className={styles.pendingIcon} aria-hidden>
              <IconClock size={22} />
            </span>
            <span className={styles.pendingBadge}>Primary</span>
          </div>
          <p className={styles.pendingLabel}>{policyStatus.pending.label}</p>
          <p className={styles.pendingVal}>{policyStatus.pending.value}</p>
        </button>

        <div className={styles.sideCol}>
          <button
            type="button"
            className={styles.smallCard}
            aria-label={`${policyStatus.inProgress.label}: ${policyStatus.inProgress.value}`}
            onClick={() => open({ type: 'inProgressPolicies' })}
          >
            <span className={`${styles.smallIcon} ${styles.iconProgress}`} aria-hidden>
              <IconActivity size={20} />
            </span>
            <div className={styles.smallBody}>
              <span className={styles.smallLabel}>{policyStatus.inProgress.label}</span>
              <span className={styles.smallVal}>{policyStatus.inProgress.value}</span>
            </div>
          </button>
          <button
            type="button"
            className={`${styles.smallCard} ${styles.rejected}`}
            aria-label={`${policyStatus.rejected.label}: ${policyStatus.rejected.value}`}
            onClick={() => open({ type: 'rejectedPolicies' })}
          >
            <span className={`${styles.smallIcon} ${styles.iconReject}`} aria-hidden>
              <IconXCircle size={20} />
            </span>
            <div className={styles.smallBody}>
              <span className={styles.smallLabel}>{policyStatus.rejected.label}</span>
              <span className={styles.smallVal}>{policyStatus.rejected.value}</span>
            </div>
          </button>
        </div>
      </div>
      <ViewAllButton onClick={() => open({ type: 'policyStatusAll' })} />
    </section>
  );
}
