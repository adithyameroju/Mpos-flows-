import {
  IconDocument,
  IconEndorse,
  IconHelp,
  IconPolicy,
  IconPhone,
} from '../../components/icons/DashboardIcons';
import { useMainTab } from '../useMainTab';
import { useNavigation } from '../useNavigation';
import {
  FlowGroup,
  FlowMenuSection,
  FlowRow,
  FlowSectionLabel,
} from '../flowUi/FlowUi';

export function MenuFlow() {
  const { push, close } = useNavigation();
  const { setTab } = useMainTab();

  return (
    <>
      <FlowMenuSection>
        <FlowSectionLabel>Account</FlowSectionLabel>
        <FlowGroup>
          <FlowRow
            title="Profile"
            subtitle="Same as Profile tab — photo, stats, settings"
            onClick={() => {
              close();
              setTab('profile');
            }}
            icon={
              <span aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            }
          />
          <FlowRow
            title="Notifications"
            subtitle="Phone & EV battery payouts, endorsements, training"
            onClick={() => push({ type: 'notifications' })}
            icon={
              <span aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            }
          />
          <FlowRow
            title="Settings"
            subtitle="Language, security, app preferences"
            onClick={() => push({ type: 'settings' })}
            icon={
              <span aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            }
          />
        </FlowGroup>
      </FlowMenuSection>

      <FlowMenuSection>
        <FlowSectionLabel>Work</FlowSectionLabel>
        <FlowGroup>
          <FlowRow
            title="Issue new policy"
            subtitle="Phone & EV battery quotes and issuance"
            onClick={() => push({ type: 'issuePolicy' })}
            icon={<IconPolicy size={20} />}
          />
          <FlowRow
            title="Initiate endorsement"
            subtitle="Update phone or EV battery policies"
            onClick={() => push({ type: 'endorsement' })}
            icon={<IconEndorse size={20} />}
          />
          <FlowRow
            title="Statements & documents"
            subtitle="Commission, TDS, partner agreements"
            onClick={() => push({ type: 'documents' })}
            icon={<IconDocument size={20} />}
          />
        </FlowGroup>
      </FlowMenuSection>

      <FlowMenuSection>
        <FlowSectionLabel>Support</FlowSectionLabel>
        <FlowGroup>
          <FlowRow
            title="Help & support"
            subtitle="Phone, EV battery, and app FAQs"
            onClick={() => push({ type: 'help' })}
            icon={<IconHelp size={20} />}
          />
          <FlowRow
            title="Call relationship manager"
            subtitle="Neha Sharma"
            onClick={() => push({ type: 'callRm' })}
            icon={<IconPhone size={20} />}
          />
        </FlowGroup>
      </FlowMenuSection>

      <FlowMenuSection>
        <FlowSectionLabel>Session</FlowSectionLabel>
        <FlowGroup>
          <FlowRow
            title="Privacy & legal"
            subtitle="Terms, privacy, licenses"
            onClick={() => push({ type: 'legal' })}
            showChevron
            icon={
              <span aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
            }
          />
          <FlowRow
            title="Sign out"
            subtitle="End session on this device"
            onClick={() => push({ type: 'signOut' })}
            icon={
              <span aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            }
          />
        </FlowGroup>
      </FlowMenuSection>

      <p style={{ marginTop: 'var(--space-6)', fontSize: 13, color: 'var(--text-tertiary)' }}>
        Phone & EV battery partner · v2.4.0 (build 9182)
      </p>
      <button
        type="button"
        onClick={() => close()}
        style={{
          marginTop: 'var(--space-3)',
          border: 'none',
          background: 'none',
          color: 'var(--purple-600)',
          fontWeight: 600,
          fontSize: 15,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        Close menu
      </button>
    </>
  );
}
