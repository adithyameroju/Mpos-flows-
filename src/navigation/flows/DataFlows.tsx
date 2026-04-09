import { useMemo, useState, type ReactNode } from 'react';
import { endorsements } from '../../data/dashboardData';
import { mockEndorsementTimeline, mockLeaderboard, mockPolicies } from '../../data/flowMockData';
import type { SubPage } from '../types';
import {
  FlowChips,
  FlowEmpty,
  FlowGroup,
  FlowLead,
  FlowListCard,
  FlowRankRow,
  FlowRow,
  FlowSectionLabel,
  FlowStatGrid,
  FlowTimeline,
} from '../flowUi/FlowUi';

type PipelineMode = 'pending' | 'inProgress' | 'rejected' | 'all';

type PipelineRow =
  | { kind: 'pending'; id: string; product: string; customer: string; premium: string; since: string }
  | {
      kind: 'inProgress';
      id: string;
      product: string;
      customer: string;
      stage: string;
      eta: string;
    }
  | {
      kind: 'rejected';
      id: string;
      product: string;
      customer: string;
      reason: string;
      nextStep: string;
    };

function usePipelineMode(page: SubPage): PipelineMode {
  switch (page.type) {
    case 'pendingPolicies':
      return 'pending';
    case 'inProgressPolicies':
      return 'inProgress';
    case 'rejectedPolicies':
      return 'rejected';
    case 'policyStatusAll':
      return 'all';
    default:
      return 'all';
  }
}

function buildRows(tab: PipelineMode): PipelineRow[] {
  if (tab === 'pending') {
    return mockPolicies.pending.map((p) => ({ kind: 'pending' as const, ...p }));
  }
  if (tab === 'inProgress') {
    return mockPolicies.inProgress.map((p) => ({ kind: 'inProgress' as const, ...p }));
  }
  if (tab === 'rejected') {
    return mockPolicies.rejected.map((p) => ({ kind: 'rejected' as const, ...p }));
  }
  return [
    ...mockPolicies.pending.map((p) => ({ kind: 'pending' as const, ...p })),
    ...mockPolicies.inProgress.map((p) => ({ kind: 'inProgress' as const, ...p })),
    ...mockPolicies.rejected.map((p) => ({ kind: 'rejected' as const, ...p })),
  ];
}

function rowExtra(item: PipelineRow): ReactNode {
  if (item.kind === 'pending') {
    return (
      <p style={{ marginTop: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
        Premium {item.premium} · waiting {item.since}
      </p>
    );
  }
  if (item.kind === 'inProgress') {
    return (
      <p style={{ marginTop: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
        {item.stage} · {item.eta}
      </p>
    );
  }
  return (
    <p style={{ marginTop: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
      {item.reason} — {item.nextStep}
    </p>
  );
}

function rowBadge(item: PipelineRow): string {
  if (item.kind === 'pending') return 'Awaiting you';
  if (item.kind === 'inProgress') return 'In flight';
  return 'Action needed';
}

export function PolicyPipelineFlow({ page }: { page: SubPage }) {
  const initial = usePipelineMode(page);
  const [tab, setTab] = useState<PipelineMode>(initial);

  const chips = useMemo(
    () =>
      [
        { id: 'all' as PipelineMode, label: 'All' },
        { id: 'pending' as PipelineMode, label: 'Pending' },
        { id: 'inProgress' as PipelineMode, label: 'In progress' },
        { id: 'rejected' as PipelineMode, label: 'Rejected' },
      ] as const,
    [],
  );

  const show = buildRows(tab);

  return (
    <>
      {page.type === 'policyStatusAll' ? (
        <FlowChips
          options={chips.map((c) => ({ id: c.id, label: c.label }))}
          value={tab}
          onChange={(id) => setTab(id as PipelineMode)}
        />
      ) : null}
      {show.length === 0 ? (
        <FlowEmpty title="Nothing here yet" hint="New items appear as customers move through the funnel." />
      ) : (
        show.map((item) => (
          <FlowListCard
            key={`${item.kind}-${item.id}`}
            title={item.product}
            meta={`${item.customer}`}
            badge={rowBadge(item)}
            extra={rowExtra(item)}
          />
        ))
      )}
    </>
  );
}

export function EndorsementsAllFlow() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const filtered = endorsements.filter((e) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return e.status.toLowerCase().includes('pending');
    if (filter === 'approved') return e.status === 'Approved';
    return e.status === 'Rejected';
  });

  return (
    <>
      <FlowChips
        options={[
          { id: 'all', label: 'All' },
          { id: 'pending', label: 'Pending' },
          { id: 'approved', label: 'Approved' },
          { id: 'rejected', label: 'Rejected' },
        ]}
        value={filter}
        onChange={(id) => setFilter(id as typeof filter)}
      />
      {filtered.map((e) => (
        <FlowListCard key={e.id} title={e.policyId} meta={e.dateLabel} badge={e.status} />
      ))}
    </>
  );
}

export function EndorsementDetailFlow({ policyId }: { policyId: string }) {
  const items = [...mockEndorsementTimeline(policyId)];
  return (
    <>
      <FlowLead>
        Status and insurer hand-offs for this endorsement. Documents attach under each step in
        production.
      </FlowLead>
      <FlowTimeline items={items} />
    </>
  );
}

export function LeaderboardFlow() {
  const [range, setRange] = useState('today');

  return (
    <>
      <FlowChips
        options={[
          { id: 'today', label: 'Today' },
          { id: 'week', label: 'This week' },
          { id: 'month', label: 'Month' },
        ]}
        value={range}
        onChange={setRange}
      />
      <FlowSectionLabel>Top agents · policies sold</FlowSectionLabel>
      {mockLeaderboard.map((row) => (
        <FlowRankRow
          key={row.rank}
          rank={row.rank}
          name={row.name}
          policies={row.policies}
          highlight={'isYou' in row && row.isYou}
        />
      ))}
    </>
  );
}

export function YourRankFlow() {
  return (
    <>
      <FlowStatGrid
        items={[
          { label: "Today's rank", value: '#78' },
          { label: 'Policies (30d)', value: '24' },
          { label: 'Tier', value: 'Gold' },
          { label: 'Region percentile', value: 'Top 18%' },
        ]}
      />
      <FlowLead>
        You’re 6 policies behind #77. Finish pending quotes before cut-off tonight to climb the
        daily board.
      </FlowLead>
      <FlowGroup>
        <FlowRow title="Daily history" subtitle="Last 7 days" onClick={() => {}} />
        <FlowRow title="Compare with region" onClick={() => {}} />
      </FlowGroup>
    </>
  );
}
