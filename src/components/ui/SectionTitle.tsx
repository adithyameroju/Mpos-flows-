import styles from './SectionTitle.module.css';

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
};

export function SectionTitle({ title, subtitle, className, id }: Props) {
  return (
    <header className={`${styles.wrap} ${className ?? ''}`}>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
