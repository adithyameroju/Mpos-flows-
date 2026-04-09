import { useCallback, useRef, useState } from 'react';
import { whatsNewItems } from '../../data/dashboardData';
import { useNavigation } from '../../navigation/useNavigation';
import { IconReelPlay } from '../icons/DashboardIcons';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './WhatsNewSection.module.css';

const REEL_GAP_PX = 16;

export function WhatsNewSection() {
  const { open } = useNavigation();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>('[data-reel-slide]');
    if (!slide) return;
    const step = slide.offsetWidth + REEL_GAP_PX;
    if (step <= 0) return;
    const idx = Math.round(el.scrollLeft / step);
    setActive(Math.min(Math.max(idx, 0), whatsNewItems.length - 1));
  }, []);

  return (
    <section className={styles.section} aria-labelledby="whats-new-heading">
      <SectionTitle
        id="whats-new-heading"
        title="What’s new"
        subtitle="Phone & EV battery updates, campaigns, and selling tips."
      />
      <div
        ref={scrollerRef}
        className={styles.scroller}
        onScroll={onScroll}
        role="region"
        aria-roledescription="carousel"
        aria-label="What’s new"
      >
        {whatsNewItems.map((item) => (
          <button
            key={item.id}
            type="button"
            data-reel-slide
            className={`${styles.slide} ${styles.slideBtn}`}
            onClick={() => open({ type: 'whatsNewStories', startId: item.id })}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className={styles.overlay} />
            <div className={styles.reelFooter}>
              <h3 className={styles.slideTitle}>{item.title}</h3>
              <span className={styles.playHint} aria-hidden>
                <IconReelPlay size={28} />
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className={styles.dots} role="tablist" aria-label="Carousel position">
        {whatsNewItems.map((item, i) => (
          <span
            key={item.id}
            role="presentation"
            className={i === active ? `${styles.dot} ${styles.dotActive}` : styles.dot}
          />
        ))}
      </div>
    </section>
  );
}
