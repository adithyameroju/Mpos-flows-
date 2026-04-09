import { trainingFeatured, trainingModules } from '../../data/tabScreensData';
import { MainScreenHeader } from '../layout/MainScreenHeader';
import { IconChevronRight, IconTabTraining } from '../icons/DashboardIcons';
import styles from './TrainingScreen.module.css';

function statusLabel(status: (typeof trainingModules)[number]['status']) {
  switch (status) {
    case 'done':
      return { text: 'Done', className: styles.statusDone };
    case 'in_progress':
      return { text: 'In progress', className: styles.statusProgress };
    default:
      return { text: 'Start', className: styles.statusTodo };
  }
}

export function TrainingScreen() {
  return (
    <>
      <MainScreenHeader title="Training" />
      <div className={styles.page}>
      <p className={styles.subtitle}>Phone &amp; EV battery modules to grow your book</p>

      <button type="button" className={styles.featured}>
        <span className={styles.featuredLabel}>Continue learning</span>
        <span className={styles.featuredTitle}>{trainingFeatured.title}</span>
        <span className={styles.featuredSub}>{trainingFeatured.subtitle}</span>
        <div className={styles.progressTrack} aria-hidden>
          <div
            className={styles.progressFill}
            style={{ width: `${trainingFeatured.progress * 100}%` }}
          />
        </div>
      </button>

      <h2 className={styles.sectionLabel}>All modules</h2>
      <ul className={styles.moduleList}>
        {trainingModules.map((m) => {
          const st = statusLabel(m.status);
          return (
            <li key={m.id}>
              <button type="button" className={styles.moduleRow}>
                <span className={styles.moduleIcon} aria-hidden>
                  <IconTabTraining size={20} />
                </span>
                <span className={styles.moduleBody}>
                  <span className={styles.moduleTitle}>{m.title}</span>
                  <span className={styles.moduleMeta}>{m.duration}</span>
                </span>
                <span className={`${styles.statusPill} ${st.className}`}>{st.text}</span>
                <span className={styles.moduleChevron} aria-hidden>
                  <IconChevronRight size={18} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}
