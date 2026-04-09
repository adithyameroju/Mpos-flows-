import { IconMoon, IconSun } from '../components/icons/DashboardIcons';
import { useTheme } from './themeContext';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? <IconMoon size={20} /> : <IconSun size={20} />}
    </button>
  );
}
