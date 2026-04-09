import type { ReactNode } from 'react';
import { IconChevronRight } from '../../components/icons/DashboardIcons';
import styles from './FlowUi.module.css';

export function FlowSectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <p className={`${styles.sectionLabel} ${className ?? ''}`.trim()}>{children}</p>;
}

/** Groups a section label + list in the menu for consistent vertical rhythm */
export function FlowMenuSection({ children }: { children: ReactNode }) {
  return <div className={styles.menuSection}>{children}</div>;
}

export function FlowGroup({ children }: { children: ReactNode }) {
  return <div className={styles.group}>{children}</div>;
}

type RowProps = {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  onClick: () => void;
  showChevron?: boolean;
};

export function FlowRow({ icon, title, subtitle, onClick, showChevron = true }: RowProps) {
  return (
    <button type="button" className={styles.row} onClick={onClick}>
      {icon ? <span className={styles.rowIcon}>{icon}</span> : null}
      <span className={styles.rowBody}>
        <span className={styles.rowTitle}>{title}</span>
        {subtitle ? <span className={styles.rowSub}>{subtitle}</span> : null}
      </span>
      {showChevron ? <IconChevronRight className={styles.chevron} size={18} /> : null}
    </button>
  );
}

export function FlowLead({ children }: { children: ReactNode }) {
  return <p className={styles.lead}>{children}</p>;
}

type FieldProps = { label: string; children: ReactNode };

export function FlowField({ label, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>{label}</label>
      {children}
    </div>
  );
}

export function FlowInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={styles.input} />;
}

export function FlowTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={styles.textarea} />;
}

type BtnProps = { children: ReactNode; onClick?: () => void; disabled?: boolean };

export function FlowPrimaryButton({ children, onClick, disabled }: BtnProps) {
  return (
    <button type="button" className={styles.primaryBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function FlowSecondaryButton({ children, onClick }: BtnProps) {
  return (
    <button type="button" className={styles.secondaryBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export function FlowDestructiveButton({ children, onClick }: BtnProps) {
  return (
    <button type="button" className={styles.destructiveBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export function FlowBtnStack({ children }: { children: ReactNode }) {
  return <div className={styles.btnStack}>{children}</div>;
}

type ChipsProps = {
  options: readonly { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
};

export function FlowChips({ options, value, onChange }: ChipsProps) {
  return (
    <div className={styles.chips}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          className={`${styles.chip} ${value === o.id ? styles.chipActive : ''}`}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function FlowStepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className={styles.steps}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`${styles.stepDot} ${i === step ? styles.stepDotActive : ''}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function FlowStatGrid({
  items,
}: {
  items: readonly { label: string; value: string }[];
}) {
  return (
    <div className={styles.statGrid}>
      {items.map((item) => (
        <div key={item.label} className={styles.statCard}>
          <p className={styles.statLabel}>{item.label}</p>
          <p className={styles.statValue}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function FlowEmpty({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className={styles.empty}>
      <strong>{title}</strong>
      {hint ? (
        <>
          <br />
          {hint}
        </>
      ) : null}
    </div>
  );
}

type ListCardProps = {
  title: string;
  meta: string;
  badge?: string;
  extra?: ReactNode;
};

export function FlowListCard({ title, meta, badge, extra }: ListCardProps) {
  return (
    <div className={styles.listCard}>
      <p className={styles.listCardTitle}>{title}</p>
      <p className={styles.listCardMeta}>{meta}</p>
      {badge ? <span className={styles.badge}>{badge}</span> : null}
      {extra}
    </div>
  );
}

type TlItem = { id: string; label: string; detail: string; time: string; done: boolean };

export function FlowTimeline({ items }: { items: readonly TlItem[] }) {
  return (
    <ul className={styles.timeline}>
      {items.map((item) => (
        <li key={item.id}>
          <span
            className={`${styles.timelineDot} ${!item.done ? styles.timelineDotMuted : ''}`}
            aria-hidden
          />
          <p className={styles.tlTitle}>{item.label}</p>
          <p className={styles.tlDetail}>{item.detail}</p>
          <p className={styles.tlTime}>{item.time}</p>
        </li>
      ))}
    </ul>
  );
}

type ChatLine = { id: string; from: 'rm' | 'you'; text: string; time: string };

export function FlowChatThread({ messages }: { messages: readonly ChatLine[] }) {
  return (
    <div className={styles.chatArea}>
      {messages.map((m) => (
        <div
          key={m.id}
          className={`${styles.bubble} ${m.from === 'rm' ? styles.bubbleRm : styles.bubbleYou}`}
        >
          {m.text}
          <span className={styles.bubbleTime}>{m.time}</span>
        </div>
      ))}
    </div>
  );
}

export function FlowHeroBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={styles.heroBanner}>
      <h2 className={styles.heroTitle}>{title}</h2>
      <p className={styles.heroSub}>{subtitle}</p>
    </div>
  );
}

export function FlowBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function FlowProfileHeader({
  name,
  meta,
  avatarUrl,
}: {
  name: string;
  meta: string;
  avatarUrl: string;
}) {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.avatar} style={{ backgroundImage: `url(${avatarUrl})` }} role="img" />
      <div>
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileMeta}>{meta}</p>
      </div>
    </div>
  );
}

type ToggleProps = {
  label: string;
  hint?: string;
  on: boolean;
  onToggle: () => void;
};

export function FlowToggleRow({ label, hint, on, onToggle }: ToggleProps) {
  return (
    <div className={styles.toggleRow}>
      <div>
        <span className={styles.toggleLabel}>{label}</span>
        {hint ? <span className={styles.toggleHint}>{hint}</span> : null}
      </div>
      <button
        type="button"
        className={`${styles.switch} ${on ? styles.switchOn : ''}`}
        onClick={onToggle}
        role="switch"
        aria-checked={on}
        aria-label={label}
      >
        <span className={styles.switchKnob} />
      </button>
    </div>
  );
}

type RankProps = {
  rank: number;
  name: string;
  policies: number;
  highlight?: boolean;
};

export function FlowRankRow({ rank, name, policies, highlight }: RankProps) {
  return (
    <div className={`${styles.rankRow} ${highlight ? styles.rankRowYou : ''}`}>
      <span className={styles.rankNum}>{rank}</span>
      <span className={styles.rankName}>{name}</span>
      <span className={styles.rankPolicies}>{policies} policies</span>
    </div>
  );
}

type FaqProps = {
  items: readonly { q: string; a: string }[];
  openId: string | null;
  onToggle: (q: string) => void;
};

export function FlowFaqList({ items, openId, onToggle }: FaqProps) {
  return (
    <div className={styles.group}>
      {items.map((item) => {
        const open = openId === item.q;
        return (
          <div key={item.q} className={styles.faqItem}>
            <button type="button" className={styles.faqQ} onClick={() => onToggle(item.q)}>
              {item.q}
              <IconChevronRight
                size={18}
                className={open ? styles.faqChevronOpen : styles.faqChevron}
              />
            </button>
            {open ? <p className={styles.faqA}>{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
