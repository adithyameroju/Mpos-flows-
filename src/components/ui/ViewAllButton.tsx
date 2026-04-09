import styles from './ViewAllButton.module.css';

type Props = {
  label?: string;
  onClick?: () => void;
};

export function ViewAllButton({ label = 'View all', onClick }: Props) {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
}
