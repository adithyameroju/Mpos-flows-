import { useCallback, useRef, useState } from 'react';
import {
  championsLeaderboard,
  championsYou,
  goldTierBenefits,
  growthHero,
  growthTierProgress,
  keepLearningItems,
  levelUpSteps,
  platinumLocked,
  platinumTierBenefits,
} from '../../data/growthData';
import { useNavigation } from '../../navigation/useNavigation';
import {
  IconBullseye,
  IconChevronRight,
  IconLock,
  IconReelPlay,
  IconTrophy,
} from '../icons/DashboardIcons';
import { MainScreenHeader } from '../layout/MainScreenHeader';
import styles from './GrowthScreen.module.css';

function TierPill({ tier }: { tier: 'Platinum' | 'Gold' }) {
  const p = tier === 'Platinum' ? styles.tierPillPlatinum : '';
  return <span className={`${styles.tierPill} ${p}`}>{tier}</span>;
}

function GrowthViewAllButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" className={styles.outlineBtn} onClick={onClick}>
      {label}
    </button>
  );
}

export function GrowthScreen() {
  const { open } = useNavigation();
  const learnRef = useRef<HTMLDivElement>(null);
  const [learnDot, setLearnDot] = useState(0);

  const onLearnScroll = useCallback(() => {
    const el = learnRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>('[data-learning-card]');
    const gap = 16;
    const step = (slide?.offsetWidth ?? 0) + gap;
    if (step <= 0) return;
    const idx = Math.round(el.scrollLeft / step);
    setLearnDot(Math.min(Math.max(idx, 0), keepLearningItems.length - 1));
  }, []);

  const progressPct = Math.round(growthTierProgress.barFillPercent * 100);

  return (
    <div className={styles.growthPage}>
      <header className={styles.hero}>
        <MainScreenHeader title="Growth" variant="growth" titleAs="p" />
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{growthHero.kicker}</p>
          <h1 className={styles.headline}>{growthHero.tierHeadline}</h1>

          <div className={styles.progressCard}>
            <div className={styles.tierGrid}>
              {growthTierProgress.tierLabels.map((t, i) => {
                const active = i === growthTierProgress.activeTierIndex;
                return (
                  <div key={t} className={styles.tierGridCell}>
                    <span className={active ? styles.tierLabelGold : styles.tierLabelMuted}>
                      {t}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className={styles.markerRail}>
              <div
                className={styles.markerStack}
                style={{ left: `${progressPct}%` }}
                aria-hidden
              >
                <div className={styles.markerDot} />
                <div className={styles.markerArrow} />
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: `${progressPct}%` }} />
              </div>
            </div>

            <div className={styles.tierGrid}>
              {growthTierProgress.tierTargets.map((t) => (
                <div key={t} className={styles.tierGridCell}>
                  <span className={styles.target}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.heroFooter}>{growthTierProgress.helperText}</p>
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.sectionTitle}>
          <span className={styles.titleLine} aria-hidden />
          <h2 className={styles.sectionTitleText}>Tier benefits</h2>
          <span className={styles.titleLine} aria-hidden />
        </div>

        <div className={styles.carousel} role="region" aria-label="Tier benefits">
          <article className={styles.benefitCardGold}>
            <span className={styles.badgeYourTier}>Your tier</span>
            <h3 className={styles.cardTitleGold}>Gold tier benefits</h3>
            <ul className={styles.benefitList}>
              {goldTierBenefits.map((b) => (
                <li key={b.id} className={styles.benefitRow}>
                  <span className={styles.bullseye} aria-hidden>
                    <IconBullseye size={26} />
                  </span>
                  <div className={styles.benefitCopy}>
                    <p className={styles.benefitTitle}>{b.title}</p>
                    <p className={styles.benefitSub}>{b.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className={styles.redeemBtn} onClick={() => open({ type: 'redeem' })}>
              Redeem
            </button>
          </article>

          {/* Platinum tier — locked preview (reference) */}
          <article className={styles.benefitCardPlatinum} aria-label="Platinum tier benefits locked">
            <h3 className={styles.cardTitlePlatinum}>Platinum tier benefits</h3>
            <ul className={styles.benefitListMuted}>
              {platinumTierBenefits.map((b) => (
                <li key={b.id} className={styles.benefitRowMuted}>
                  <span className={styles.bullseyeMuted} aria-hidden>
                    <IconBullseye size={26} />
                  </span>
                  <div className={styles.benefitCopy}>
                    <p className={styles.benefitTitleMuted}>{b.title}</p>
                    <p className={styles.benefitSubMuted}>{b.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={styles.lockBtn}
              onClick={() => open({ type: 'platinumUnlock' })}
            >
              <IconLock size={16} />
              {platinumLocked.unlockHint}
            </button>
          </article>
        </div>

        <section className={styles.champSection} aria-labelledby="champions-heading">
          <div className={styles.champHeader}>
            <div className={styles.trophyWrap} aria-hidden>
              <IconTrophy size={36} />
            </div>
            <h2 id="champions-heading" className={styles.champTitle}>
              Champions
            </h2>
            <p className={styles.champSubtitle}>Today&apos;s leaderboard</p>
          </div>

          <div className={styles.leaderList}>
            {championsLeaderboard.map((row) => (
              <div key={row.id} className={styles.leaderRow}>
                <span className={styles.rank}>#{row.rank}</span>
                <div
                  className={styles.avatar}
                  style={{ backgroundImage: `url(${row.avatarUrl})` }}
                  role="presentation"
                />
                <div className={styles.leaderMid}>
                  <span className={styles.leaderName}>{row.name}</span>
                  <div className={styles.leaderMeta}>
                    <TierPill tier={row.tier} />
                  </div>
                </div>
                <span className={styles.policies}>{row.policies} policies sold</span>
              </div>
            ))}

            <button
              type="button"
              className={`${styles.leaderRow} ${styles.leaderRowYou}`}
              onClick={() => open({ type: 'yourRank' })}
            >
              <span className={styles.rank}>#{championsYou.rank}</span>
              <div
                className={styles.avatar}
                style={{ backgroundImage: `url(${championsYou.avatarUrl})` }}
                role="presentation"
              />
              <div className={styles.leaderMid}>
                <span className={styles.leaderName}>{championsYou.name}</span>
                <div className={styles.leaderMeta}>
                  <span className={styles.youBadge}>You</span>
                  <TierPill tier={championsYou.tier} />
                </div>
              </div>
              <span className={styles.policies}>{championsYou.policies} policies sold</span>
              <IconChevronRight className={styles.rowChevron} size={18} />
            </button>
          </div>

          <div className={styles.viewAll}>
            <GrowthViewAllButton label="View all" onClick={() => open({ type: 'leaderboard' })} />
          </div>
        </section>

        <div className={styles.sectionTitle}>
          <span className={styles.titleLine} aria-hidden />
          <h2 className={styles.sectionTitleText}>How to level up</h2>
          <span className={styles.titleLine} aria-hidden />
        </div>

        <div className={styles.steps}>
          {levelUpSteps.map((s) => (
            <div key={s.id} className={styles.stepCard}>
              <div className={styles.stepNum}>{s.step}</div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepSub}>{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <GrowthViewAllButton label="View all" onClick={() => open({ type: 'levelUpGuide' })} />
        </div>

        <h2 className={styles.sectionHeading}>Keep learning</h2>
        <p className={styles.keepSubtitle}>Top modules that can help you grow more</p>

        <div
          ref={learnRef}
          className={styles.learningScroller}
          onScroll={onLearnScroll}
          role="region"
          aria-label="Learning modules"
        >
          {keepLearningItems.map((item) =>
            item.kind === 'gst' ? (
              <button
                key={item.id}
                type="button"
                data-learning-card
                className={`${styles.learningCard} ${styles.learningCardGst} ${styles.learningCardBtn}`}
                onClick={() =>
                  open({
                    type: 'module',
                    id: item.id,
                    title: item.title,
                    subtitle: item.subtitle,
                  })
                }
              >
                <span className={styles.gstIcon} aria-hidden>
                  ₹ GST
                </span>
                <div className={styles.learningReelFooter}>
                  <div className={styles.learningTextBlock}>
                    <h3 className={styles.learningTitle}>{item.title}</h3>
                    <p className={styles.learningSub}>{item.subtitle}</p>
                  </div>
                  <span className={styles.learningPlayHint} aria-hidden>
                    <IconReelPlay size={28} />
                  </span>
                </div>
              </button>
            ) : (
              <button
                key={item.id}
                type="button"
                data-learning-card
                className={`${styles.learningCard} ${styles.learningCardBtn}`}
                onClick={() =>
                  open({
                    type: 'module',
                    id: item.id,
                    title: item.title,
                    subtitle: item.subtitle,
                  })
                }
              >
                <div
                  className={styles.learningImage}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className={styles.learningImageOverlay} />
                <div className={styles.learningReelFooter}>
                  <h3 className={styles.learningImageTitle}>{item.title}</h3>
                  <span className={styles.learningPlayHint} aria-hidden>
                    <IconReelPlay size={28} />
                  </span>
                </div>
              </button>
            ),
          )}
        </div>

        <div className={styles.dots} aria-hidden>
          {keepLearningItems.map((item, i) => (
            <span
              key={item.id}
              className={i === learnDot ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
