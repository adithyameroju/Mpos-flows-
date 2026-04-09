import { Badge } from '../ui/Badge';
import styles from './HeroSection.module.css';
import {
  bonusStrip,
  earnings,
  tierProgress,
  userGreeting,
} from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import { IconHelp, IconMenu } from '../icons/DashboardIcons';
import { ThemeToggle } from '../../theme/ThemeToggle';

export function HeroSection() {
  const { open } = useNavigation();
  return (
    <section className={styles.hero} aria-label="Account summary">
      <div
        className={styles.heroBg}
        style={{
          paddingTop: 'max(var(--space-3), env(safe-area-inset-top))',
        }}
      >
        <div className={styles.topBar}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Open menu"
            onClick={() => open({ type: 'menu' })}
          >
            <IconMenu size={22} />
          </button>
          <div className={styles.topRight}>
            <ThemeToggle />
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Help"
              onClick={() => open({ type: 'help' })}
            >
              <IconHelp size={22} />
            </button>
          </div>
        </div>

        <div className={styles.greetingRow}>
          <div
            className={styles.avatar}
            style={{
              backgroundImage: `url(${userGreeting.avatarUrl})`,
            }}
            role="img"
            aria-label="Profile photo"
          />
          <div className={styles.greetingText}>
            <div className={styles.nameRow}>
              <span className={styles.hi}>Hi {userGreeting.name},</span>
              <Badge variant="gold" className={styles.tierPill}>
                {userGreeting.tierLabel}
              </Badge>
            </div>
            <p className={styles.sub}>{userGreeting.subtitle}</p>
          </div>
        </div>

        <div className={styles.earningsCard}>
          <div className={styles.earningsTop}>
            <div>
              <p className={styles.earnLabel}>{earnings.label}</p>
              <p className={styles.amount}>{earnings.amountFormatted}</p>
            </div>
            <button type="button" className={styles.encash} onClick={() => open({ type: 'encash' })}>
              Encash
            </button>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Policies sold</span>
              <span className={styles.statVal}>{earnings.policiesSold}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statLabel}>Payouts</span>
              <span className={styles.statVal}>{earnings.payoutsCount}</span>
            </div>
          </div>
        </div>

        <div className={styles.tierCard}>
          <div className={styles.tierLabels}>
            {tierProgress.tiers.map((t, i) => {
              const active = i === tierProgress.activeTierIndex;
              const tierClass =
                active && t === 'Gold' ? styles.tierActiveGold : active ? styles.tierActive : styles.tierMuted;
              return (
                <span key={t} className={tierClass}>
                  {t}
                </span>
              );
            })}
          </div>
          <div className={styles.tierBarWrap}>
            <div className={styles.tierBarTrack}>
              <div
                className={styles.tierBarFill}
                style={{ width: `${Math.round(tierProgress.progressToPlatinum * 100)}%` }}
              />
            </div>
            <div
              className={styles.tierMarker}
              style={{ left: '50%' }}
              title="Current tier: Gold"
            />
          </div>
          <p className={styles.tierHelp}>{tierProgress.helperText}</p>
        </div>

        <button
          type="button"
          className={styles.bonusStrip}
          onClick={() => open({ type: 'festiveOffer' })}
        >
          {bonusStrip.text}
        </button>
      </div>
    </section>
  );
}
