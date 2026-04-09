import { useState } from 'react';
import {
  documentItems,
  flowUser,
  notificationItems,
} from '../../data/flowMockData';
import { relationshipManager, userGreeting } from '../../data/dashboardData';
import { useNavigation } from '../useNavigation';
import {
  FlowBtnStack,
  FlowDestructiveButton,
  FlowGroup,
  FlowLead,
  FlowPrimaryButton,
  FlowProfileHeader,
  FlowRow,
  FlowSecondaryButton,
  FlowSectionLabel,
  FlowToggleRow,
} from '../flowUi/FlowUi';
import styles from '../flowUi/FlowUi.module.css';

export function ProfileFlow() {
  return (
    <>
      <FlowProfileHeader
        name={userGreeting.name}
        meta={`${userGreeting.tierLabel} · ${flowUser.agentId}`}
        avatarUrl={userGreeting.avatarUrl}
      />
      <FlowGroup>
        <div className={styles.toggleRow}>
          <span className={styles.toggleLabel}>Email</span>
          <span className={styles.rowSub} style={{ textAlign: 'right' }}>
            {flowUser.email}
          </span>
        </div>
        <div className={styles.toggleRow}>
          <span className={styles.toggleLabel}>Phone</span>
          <span className={styles.rowSub} style={{ textAlign: 'right' }}>
            {flowUser.phone}
          </span>
        </div>
        <div className={styles.toggleRow}>
          <span className={styles.toggleLabel}>Region</span>
          <span className={styles.rowSub} style={{ textAlign: 'right' }}>
            {flowUser.region}
          </span>
        </div>
      </FlowGroup>
      <FlowLead>
        Keep your KYC documents up to date to avoid payout delays. Changes may require manager
        approval.
      </FlowLead>
    </>
  );
}

export function SettingsFlow() {
  const [bio, setBio] = useState(true);
  const [haptics, setHaptics] = useState(false);
  const [marketing, setMarketing] = useState(true);

  return (
    <>
      <FlowSectionLabel>Preferences</FlowSectionLabel>
      <FlowGroup>
        <FlowToggleRow
          label="Biometric unlock"
          hint="Use Face ID or fingerprint when returning to the app"
          on={bio}
          onToggle={() => setBio((v) => !v)}
        />
        <FlowToggleRow
          label="Haptic feedback"
          hint="Light taps on key actions"
          on={haptics}
          onToggle={() => setHaptics((v) => !v)}
        />
        <FlowToggleRow
          label="Product updates"
          hint="Email and push for campaigns"
          on={marketing}
          onToggle={() => setMarketing((v) => !v)}
        />
      </FlowGroup>
      <FlowSectionLabel>Data</FlowSectionLabel>
      <FlowGroup>
        <FlowRow title="Clear cached quotes" subtitle="Frees ~12 MB" onClick={() => {}} />
        <FlowRow title="Download my data" subtitle="GDPR-style export" onClick={() => {}} />
      </FlowGroup>
    </>
  );
}

export function NotificationsFlow() {
  return (
    <>
      {notificationItems.map((n) => (
        <button
          key={n.id}
          type="button"
          className={styles.listCard}
          style={{
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer',
            border: n.unread ? '1px solid var(--purple-200)' : undefined,
          }}
        >
          <p className={styles.listCardTitle}>
            {n.title}
            {n.unread ? (
              <span
                style={{
                  marginLeft: 8,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--purple-500)',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
                aria-label="Unread"
              />
            ) : null}
          </p>
          <p className={styles.listCardMeta}>{n.body}</p>
          <p className={styles.listCardMeta} style={{ marginTop: 6 }}>
            {n.time} ago
          </p>
        </button>
      ))}
    </>
  );
}

export function DocumentsFlow() {
  return (
    <>
      <FlowLead>Statements and tax documents for your records. Tap to preview (demo).</FlowLead>
      <FlowGroup>
        {documentItems.map((d) => (
          <FlowRow key={d.id} title={d.title} subtitle={d.meta} onClick={() => {}} />
        ))}
      </FlowGroup>
    </>
  );
}

export function LegalFlow() {
  return (
    <>
      <FlowGroup>
        <FlowRow title="Terms of use" subtitle="Partner program" onClick={() => {}} />
        <FlowRow title="Privacy policy" onClick={() => {}} />
        <FlowRow title="Open-source licenses" onClick={() => {}} />
        <FlowRow title="Insurance regulatory disclosures" onClick={() => {}} />
      </FlowGroup>
    </>
  );
}

export function SignOutFlow() {
  const { close, pop } = useNavigation();

  return (
    <>
      <FlowLead>
        You’ll need to sign in again to access quotes, endorsements, and payouts. Any in-progress
        drafts are saved securely.
      </FlowLead>
      <FlowBtnStack>
        <FlowDestructiveButton onClick={() => close()}>Sign out</FlowDestructiveButton>
        <FlowSecondaryButton onClick={() => pop()}>Cancel</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

export function CallRmFlow() {
  return (
    <>
      <FlowProfileHeader
        name={relationshipManager.name}
        meta={relationshipManager.subtitle}
        avatarUrl={relationshipManager.avatarUrl}
      />
      <FlowLead>Best hours: Mon–Fri, 10:00–18:00 IST. For urgent endorsements, use Message.</FlowLead>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => {}}>Call +91 80 4718 1200</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => {}}>Copy RM direct line</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}
