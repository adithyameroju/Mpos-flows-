import { useCallback, useMemo, useState } from 'react';
import { whatsNewItems } from '../../data/dashboardData';
import { useNavigation } from '../useNavigation';
import type { SubPage } from '../types';
import styles from './WhatsNewStoriesFlow.module.css';

type Props = {
  page: Extract<SubPage, { type: 'whatsNewStories' }>;
  onClose: () => void;
};

export function WhatsNewStoriesFlow({ page, onClose }: Props) {
  const { push } = useNavigation();
  const items = useMemo(() => [...whatsNewItems], []);

  const initialIndex = useMemo(() => {
    const i = items.findIndex((w) => w.id === page.startId);
    return i >= 0 ? i : 0;
  }, [items, page.startId]);

  const [index, setIndex] = useState(initialIndex);
  const item = items[index];

  const goNext = useCallback(() => {
    if (index >= items.length - 1) {
      onClose();
      return;
    }
    setIndex((i) => i + 1);
  }, [index, items.length, onClose]);

  const goPrev = useCallback(() => {
    if (index <= 0) {
      onClose();
      return;
    }
    setIndex((i) => i - 1);
  }, [index, onClose]);

  const openArticle = useCallback(() => {
    push({ type: 'whatsNew', id: item.id, title: item.title });
  }, [item.id, item.title, push]);

  if (!item) {
    return null;
  }

  return (
    <div className={styles.root}>
      <header className={styles.top}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className={styles.segments} role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={items.length} aria-label="Story progress">
          {items.map((story, i) => (
            <div key={story.id} className={styles.segmentTrack}>
              <div
                className={styles.segmentFill}
                style={{
                  transform:
                    i < index ? 'scaleX(1)' : i === index ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </div>
          ))}
        </div>
        <span className={styles.topSpacer} aria-hidden />
      </header>

      <div
        className={styles.media}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        role="img"
        aria-label={item.title}
      />
      <div className={styles.mediaOverlay} />

      <button type="button" className={styles.tapLeft} onClick={goPrev} aria-label="Previous story" />
      <button type="button" className={styles.tapRight} onClick={goNext} aria-label="Next story" />

      <footer className={styles.bottom}>
        <div className={styles.bottomText}>
          <p className={styles.kicker}>What’s new</p>
          <h2 className={styles.title}>{item.title}</h2>
        </div>
        <button type="button" className={styles.readArticle} onClick={openArticle}>
          Read full article
        </button>
      </footer>
    </div>
  );
}
