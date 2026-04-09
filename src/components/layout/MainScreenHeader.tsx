import { useNavigation } from '../../navigation/useNavigation';
import { ThemeToggle } from '../../theme/ThemeToggle';
import { IconHelp, IconMenu } from '../icons/DashboardIcons';
import styles from './MainScreenHeader.module.css';

type Props = {
  title: string;
  /** Growth hero uses light buttons on dark gradient */
  variant?: 'surface' | 'growth';
  /**
   * Use `p` when the page has another primary h1 (e.g. Growth tier headline).
   */
  titleAs?: 'h1' | 'p';
};

export function MainScreenHeader({ title, variant = 'surface', titleAs = 'h1' }: Props) {
  const { open } = useNavigation();
  const isGrowth = variant === 'growth';
  const barClass = isGrowth
    ? `${styles.bar} ${styles.barTransparent} ${styles.barGrowth}`
    : styles.bar;
  const btnClass = isGrowth ? `${styles.iconBtn} ${styles.iconBtnDark}` : styles.iconBtn;
  const titleClass = isGrowth ? `${styles.title} ${styles.titleOnDark}` : styles.title;
  const TitleTag = titleAs === 'h1' ? 'h1' : 'p';

  return (
    <header className={barClass}>
      <div className={styles.leftSlot}>
        <button
          type="button"
          className={btnClass}
          aria-label="Open menu"
          onClick={() => open({ type: 'menu' })}
        >
          <IconMenu size={22} />
        </button>
      </div>
      <TitleTag className={titleClass}>{title}</TitleTag>
      <div className={styles.rightSlot}>
        <ThemeToggle />
        <button
          type="button"
          className={btnClass}
          aria-label="Help"
          onClick={() => open({ type: 'help' })}
        >
          <IconHelp size={22} />
        </button>
      </div>
    </header>
  );
}
