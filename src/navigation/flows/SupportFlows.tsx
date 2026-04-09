import { useMemo, useState } from 'react';
import { bonusStrip, festiveOffer, whatsNewItems } from '../../data/dashboardData';
import { helpFaq, mockChatThread } from '../../data/flowMockData';
import type { SubPage } from '../types';
import {
  FlowBulletList,
  FlowBtnStack,
  FlowChatThread,
  FlowFaqList,
  FlowField,
  FlowHeroBanner,
  FlowInput,
  FlowLead,
  FlowPrimaryButton,
  FlowSecondaryButton,
  FlowSectionLabel,
} from '../flowUi/FlowUi';

export function HelpFlow() {
  const [open, setOpen] = useState<string | null>(null);
  const [q, setQ] = useState('');

  const filteredFaq = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return helpFaq;
    return helpFaq.filter(
      (item) =>
        item.q.toLowerCase().includes(s) || item.a.toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <>
      <FlowField label="Search help">
        <FlowInput
          placeholder="Phone, EV battery, payouts, KYC…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </FlowField>
      <FlowSectionLabel>Popular answers</FlowSectionLabel>
      <FlowFaqList
        items={filteredFaq}
        openId={open}
        onToggle={(id) => setOpen((c) => (c === id ? null : id))}
      />
      <FlowLead>Still stuck? Your RM can raise a ticket with product teams.</FlowLead>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => {}}>Message support</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => {}}>Call helpline</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

export function PlatinumUnlockFlow() {
  return (
    <>
      <FlowHeroBanner
        title="Unlock Platinum perks"
        subtitle="Higher payouts, priority endorsements, and exclusive training."
      />
      <FlowSectionLabel>Requirements</FlowSectionLabel>
      <FlowBulletList
        items={[
          '80+ issued phone & EV battery policies in the rolling quarter (net of cancellations).',
          'Complete advanced compliance module “Retail conduct”.',
          'Maintain dispute rate under 0.5% of issued policies.',
        ]}
      />
      <FlowLead>
        You’re 12 policies away and 1 training short. We’ll notify you as soon as you qualify.
      </FlowLead>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => {}}>View training</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => {}}>Share progress</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

export function LevelUpGuideFlow() {
  return (
    <>
      <FlowLead>
        Tiers combine volume, quality, and learning. Focus on consistent issuance and clean
        documentation.
      </FlowLead>
      <FlowSectionLabel>This week</FlowSectionLabel>
      <FlowBulletList
        items={[
          'Clear all pending phone & EV battery quotes older than 48 hours.',
          'Offer battery cover when customers upgrade phones or buy new packs.',
          'Log every customer objection in the CRM for coaching.',
        ]}
      />
      <FlowSectionLabel>Playbooks</FlowSectionLabel>
      <FlowBulletList
        items={[
          'Phone: IMEI, invoice, and damage rider talking points (2 min read).',
          'EV battery: SOH reports, OEM warranty overlap, and charger riders.',
          'Claims: FNOL checklist for screen, theft, and liquid damage.',
        ]}
      />
    </>
  );
}

export function TrainingModuleFlow({ page }: { page: Extract<SubPage, { type: 'module' }> }) {
  return (
    <>
      {page.subtitle ? <FlowLead>{page.subtitle}</FlowLead> : null}
      <FlowSectionLabel>Outline</FlowSectionLabel>
      <FlowBulletList
        items={[
          'Objectives and regulatory context (video 6 min).',
          'Scenario walkthroughs with sample quotes.',
          'Quiz — 8 questions, 80% to pass.',
        ]}
      />
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => {}}>Start module</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => {}}>Save for later</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

export function ChatRmFlow() {
  const [draft, setDraft] = useState('');

  return (
    <>
      <FlowChatThread messages={mockChatThread} />
      <FlowField label="Message">
        <FlowInput
          placeholder="Type a message…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
      </FlowField>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => setDraft('')}>Send</FlowPrimaryButton>
      </FlowBtnStack>
    </>
  );
}

export function FestiveOfferFlow() {
  return (
    <>
      <FlowHeroBanner title={festiveOffer.title} subtitle={festiveOffer.subtitle} />
      <FlowLead>{bonusStrip.text}</FlowLead>
      <FlowSectionLabel>How it works</FlowSectionLabel>
      <FlowBulletList
        items={[
          'Issue a phone policy and an EV battery policy the same day to stack the festive multiplier.',
          'Bonus reflects in next payout cycle after free-look.',
          'Phone theft riders and battery health add-ons count toward campaign tier.',
        ]}
      />
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => {}}>Start phone quote</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => {}}>Share with customers</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

export function WhatsNewArticleFlow({ page }: { page: Extract<SubPage, { type: 'whatsNew' }> }) {
  const item = whatsNewItems.find((w) => w.id === page.id);

  return (
    <>
      {item ? (
        <div
          style={{
            height: 180,
            borderRadius: 'var(--radius-xl)',
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: 'var(--space-5)',
          }}
          role="img"
          aria-label=""
        />
      ) : null}
      <FlowLead>
        Deep dive on “{page.title}” for phone & EV battery cover: what changed in quoting, how to
        explain it to customers, and links to updated training clips.
      </FlowLead>
      <FlowBulletList
        items={[
          'Faster premium breakdown with phone & battery add-ons collapsed by default.',
          'Suggested scripts for common objections (regional languages).',
          'Tap below to assign this module to your team huddle.',
        ]}
      />
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => {}}>Open training</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => {}}>Share article</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}
