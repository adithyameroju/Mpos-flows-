import { endorsements } from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import { Badge } from '../ui/Badge';
import { IconChevronRight, IconDocument } from '../icons/DashboardIcons';
import { SectionTitle } from '../ui/SectionTitle';
import { ViewAllButton } from '../ui/ViewAllButton';
import styles from './EndorsementsSection.module.css';

function statusVariant(s: (typeof endorsements)[number]['status']) {
  if (s === 'Approved') return 'success' as const;
  if (s === 'Rejected') return 'error' as const;
  return 'warning' as const;
}

export function EndorsementsSection() {
  const { open } = useNavigation();
  return (
    <section className={styles.section} aria-labelledby="endo-heading">
      <SectionTitle id="endo-heading" title="Track your endorsements" />
      <ul className={styles.list}>
        {endorsements.map((e) => (
          <li key={e.id}>
            <button
              type="button"
              className={styles.row}
              onClick={() => open({ type: 'endorsementDetail', policyId: e.policyId })}
            >
              <span className={styles.doc}>
                <IconDocument size={20} />
              </span>
              <span className={styles.mid}>
                <span className={styles.policyId}>{e.policyId}</span>
                <span className={styles.date}>{e.dateLabel}</span>
              </span>
              <span className={styles.right}>
                <Badge multiline={e.status.length > 14} variant={statusVariant(e.status)}>
                  {e.status}
                </Badge>
                <IconChevronRight className={styles.chev} size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <ViewAllButton onClick={() => open({ type: 'endorsementsAll' })} />
    </section>
  );
}
