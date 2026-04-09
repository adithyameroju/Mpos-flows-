import type { ReactNode } from 'react';
import type { SubPage } from './types';
import { IconClose } from '../components/icons/DashboardIcons';
import { WhatsNewStoriesFlow } from './flows/WhatsNewStoriesFlow';
import { getSubPageTitle } from './subPageMeta';
import { SubPageBody } from './SubPageBody';
import styles from './SubPageOverlay.module.css';

type Props = {
  page: SubPage;
  onBack: () => void;
};

function Body({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>;
}

export function SubPageOverlay({ page, onBack }: Props) {
  if (page.type === 'menu') {
    return (
      <div className={styles.menuOverlayRoot}>
        <div className={styles.menuOverlayColumn}>
          <aside className={styles.menuDrawer} aria-label="Menu" role="dialog" aria-modal="true">
            <header className={styles.menuDrawerHeader}>
              <h1 className={styles.menuDrawerTitle}>Menu</h1>
              <button
                type="button"
                className={styles.menuDrawerClose}
                onClick={onBack}
                aria-label="Close menu"
              >
                <IconClose size={22} />
              </button>
            </header>
            <div className={styles.menuDrawerScroll}>
              <SubPageBody page={page} />
            </div>
          </aside>
        </div>
      </div>
    );
  }

  if (page.type === 'whatsNewStories') {
    return (
      <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="What’s new stories">
        <div className={`${styles.overlayColumn} ${styles.overlayColumnStories}`}>
          <WhatsNewStoriesFlow page={page} onClose={onBack} />
        </div>
      </div>
    );
  }

  const title = getSubPageTitle(page);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="subpage-title">
      <div className={styles.overlayColumn}>
        <header className={styles.header}>
          <button type="button" className={styles.back} onClick={onBack} aria-label="Go back">
            ‹
          </button>
          <h1 id="subpage-title" className={styles.title}>
            {title}
          </h1>
        </header>
        <Body>
          <SubPageBody page={page} />
        </Body>
      </div>
    </div>
  );
}
