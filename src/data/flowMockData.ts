/**
 * Demo content for full-screen flows — replace with API responses in production.
 * Product scope: mobile phone insurance and EV battery insurance only.
 */

export const flowUser = {
  /** Keep aligned with dashboard `userGreeting.name` for a single identity */
  name: 'Adithya',
  email: 'adithya.m@partner.acko.com',
  phone: '+91 98765 43210',
  agentId: 'AG-77291',
  tier: 'Gold',
  region: 'Hyderabad',
} as const;

export const mockPolicies = {
  pending: [
    { id: 'p1', product: 'Phone · Damage + theft', customer: 'R. Kumar', premium: '₹2,840', since: '2d' },
    { id: 'p2', product: 'EV battery · Comprehensive', customer: 'S. Reddy', premium: '₹18,200', since: '5h' },
    { id: 'p3', product: 'Phone · Screen-only', customer: 'V. Singh', premium: '₹1,200', since: '1d' },
  ],
  inProgress: [
    { id: 'i1', product: 'Phone · Full cover', customer: 'A. Patel', stage: 'Insurer review', eta: '1–2d' },
    { id: 'i2', product: 'EV battery · Pack cover', customer: 'K. Nair', stage: 'BMS docs pending', eta: '3–5d' },
    { id: 'i3', product: 'Phone · Theft bundle', customer: 'M. Das', stage: 'Payment confirmation', eta: 'Same day' },
    { id: 'i4', product: 'EV battery · Extended warranty', customer: 'P. Iyer', stage: 'Policy generation', eta: 'Same day' },
  ],
  rejected: [
    {
      id: 'r1',
      product: 'Phone · Damage + theft',
      customer: 'L. Bose',
      reason: 'IMEI proof unclear',
      nextStep: 'Re-upload bill & IMEI screen',
    },
    {
      id: 'r2',
      product: 'EV battery · Comprehensive',
      customer: 'T. Menon',
      reason: 'Battery serial mismatch',
      nextStep: 'Correct OEM certificate',
    },
  ],
} as const;

export const mockLeaderboard = [
  { rank: 1, name: 'Priya S.', tier: 'Platinum', policies: 142, avatarSeed: '1' },
  { rank: 2, name: 'Arjun K.', tier: 'Platinum', policies: 128, avatarSeed: '2' },
  { rank: 3, name: 'Divya R.', tier: 'Gold', policies: 96, avatarSeed: '3' },
  { rank: 4, name: 'Vikram T.', tier: 'Gold', policies: 88, avatarSeed: '4' },
  { rank: 5, name: 'Ananya P.', tier: 'Gold', policies: 81, avatarSeed: '5' },
  { rank: 78, name: 'You', tier: 'Gold', policies: 24, avatarSeed: 'you', isYou: true },
] as const;

export const mockEndorsementTimeline = (policyId: string) =>
  [
    { id: 't1', label: 'Submitted', detail: `Request received for ${policyId}`, time: '28 Mar, 10:42', done: true },
    { id: 't2', label: 'ACKO review', detail: 'Documents verified', time: '28 Mar, 16:05', done: true },
    { id: 't3', label: 'Insurer', detail: 'Awaiting insurer decision', time: 'In progress', done: false },
    { id: 't4', label: 'Completed', detail: 'Updated policy issued', time: '—', done: false },
  ] as const;

export const mockChatThread = [
  {
    id: 'm1',
    from: 'rm' as const,
    text: 'Hi Adithya — strong week on phone renewals. Need anything on EV battery SOH docs or theft riders?',
    time: '10:12',
  },
  {
    id: 'm2',
    from: 'you' as const,
    text: 'Thanks Neha. Does the festive bonus stack if I sell a phone policy and an EV battery policy the same day?',
    time: '10:18',
  },
  {
    id: 'm3',
    from: 'rm' as const,
    text: 'Yes — 1.2× applies on phone when a qualifying EV battery policy is issued the same day. I’ll share the circular.',
    time: '10:21',
  },
] as const;

export const helpFaq = [
  {
    q: 'When do I get paid for a phone or EV battery policy?',
    a: 'Payouts release after free-look clears and the policy is in force. Track under Earnings.',
  },
  {
    q: 'How do I escalate a stuck endorsement?',
    a: 'Open the endorsement, tap Share update, and choose Escalate to RM. You’ll get a ticket ID.',
  },
  {
    q: 'What counts toward tier upgrades?',
    a: 'Issued phone & EV battery policies net of cancellations in the rolling quarter, plus training completion where applicable.',
  },
] as const;

export const notificationItems = [
  { id: 'n1', title: 'Payout processed', body: '₹18,400 credited to your registered account.', time: '2h', unread: true },
  { id: 'n2', title: 'Endorsement approved', body: 'ACK-BAT-44102 — customer notified.', time: '1d', unread: true },
  { id: 'n3', title: 'Training due', body: 'Complete “EV battery cover refresher” before 10 Apr.', time: '2d', unread: false },
] as const;

export const documentItems = [
  { id: 'd1', title: 'March 2026 — Commission statement', meta: 'PDF · 240 KB' },
  { id: 'd2', title: 'TDS certificate FY25–26', meta: 'PDF · 128 KB' },
  { id: 'd3', title: 'Partner agreement (signed)', meta: 'PDF · 1.2 MB' },
] as const;

export const policySearchResults = [
  { id: 's1', policyId: 'ACK-PHO-77291', product: 'Phone', holder: 'R. Kumar' },
  { id: 's2', policyId: 'ACK-BAT-44102', product: 'EV battery', holder: 'S. Reddy' },
  { id: 's3', policyId: 'ACK-PHO-66100', product: 'Phone', holder: 'V. Singh' },
] as const;

export const redeemCatalog = [
  { id: 'rw1', title: '₹500 Amazon voucher', cost: '2,400 pts', tier: 'Gold+' },
  { id: 'rw2', title: 'Phone & battery training pass', cost: '1,000 pts', tier: 'All' },
  { id: 'rw3', title: 'Brand merchandise kit', cost: '3,500 pts', tier: 'Platinum' },
] as const;
