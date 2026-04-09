import styles from './Badge.module.css';

type Variant = 'gold' | 'neutral' | 'success' | 'warning' | 'error' | 'info';

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  multiline?: boolean;
};

export function Badge({ children, variant = 'neutral', className, multiline }: Props) {
  return (
    <span
      className={`${styles.badge} ${styles[variant]} ${multiline ? styles.multiline : ''} ${className ?? ''}`}
    >
      {children}
    </span>
  );
}
