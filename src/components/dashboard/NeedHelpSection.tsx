import { relationshipManager } from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import { IconChat, IconPhone } from '../icons/DashboardIcons';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './NeedHelpSection.module.css';

export function NeedHelpSection() {
  const { open } = useNavigation();
  return (
    <section className={styles.section} aria-labelledby="help-heading">
      <SectionTitle
        id="help-heading"
        title="Need help?"
        subtitle="Questions on phone or EV battery cover? Your ACKO team is here."
      />
      <div className={styles.card}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${relationshipManager.avatarUrl})` }}
          role="img"
          aria-label={relationshipManager.name}
        />
        <div className={styles.text}>
          <p className={styles.name}>{relationshipManager.name}</p>
          <p className={styles.sub}>{relationshipManager.subtitle}</p>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.roundBtn}
            aria-label="Message on chat"
            onClick={() => open({ type: 'chatRm' })}
          >
            <IconChat size={20} />
          </button>
          <button
            type="button"
            className={styles.roundBtn}
            aria-label="Call"
            onClick={() => open({ type: 'callRm' })}
          >
            <IconPhone size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
