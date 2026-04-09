import { festiveBannerLine, quickActions } from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import {
  IconChevronRight,
  IconEndorse,
  IconFestivalOffer,
  IconPolicy,
} from '../icons/DashboardIcons';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './QuickActionsSection.module.css';

function ActionIcon({ type }: { type: 'policy' | 'endorse' }) {
  if (type === 'policy') {
    return (
      <span className={styles.iconBubble}>
        <IconPolicy className={styles.iconSvg} size={22} />
      </span>
    );
  }
  return (
    <span className={styles.iconBubble}>
      <IconEndorse className={styles.iconSvg} size={22} />
    </span>
  );
}

export function QuickActionsSection() {
  const { open } = useNavigation();

  const openQuickAction = (id: string) => {
    if (id === 'issue') open({ type: 'issuePolicy' });
    else open({ type: 'endorsement' });
  };

  return (
    <section className={styles.section} aria-labelledby="quick-actions-heading">
      <SectionTitle id="quick-actions-heading" title="Quick actions" />
      <div className={styles.grid}>
        {quickActions.map((a) => (
          <button
            key={a.id}
            type="button"
            className={styles.card}
            onClick={() => openQuickAction(a.id)}
          >
            <div className={styles.cardTop}>
              <ActionIcon type={a.icon} />
              <IconChevronRight className={styles.chevron} size={18} />
            </div>
            <p className={styles.cardTitle}>{a.title}</p>
            <p className={styles.cardSub}>{a.subtitle}</p>
          </button>
        ))}
      </div>
      <div className={styles.festiveBanner} role="status" aria-live="polite">
        <span className={styles.festiveBannerIcon} aria-hidden>
          <IconFestivalOffer size={22} />
        </span>
        <p className={styles.festiveBannerText}>{festiveBannerLine}</p>
      </div>
    </section>
  );
}
