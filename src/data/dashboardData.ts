/**
 * Sample dashboard content — replace with API data in production.
 * Product scope: mobile phone insurance and EV battery insurance only.
 */

export const userGreeting = {
  name: 'Adithya',
  /** Same avatar everywhere: dashboard hero, profile tab, menu profile flow */
  avatarUrl:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&q=80',
  /** One line under greeting — ellipsis via HeroSection `.sub` */
  subtitle: 'Your phone & EV battery sales this month.',
  tierLabel: 'Gold tier',
} as const;

export const earnings = {
  label: 'Earnings this month',
  amountFormatted: '₹48,250',
  policiesSold: 12,
  payoutsCount: 3,
} as const;

export const tierProgress = {
  tiers: ['Silver', 'Gold', 'Platinum'] as const,
  activeTierIndex: 1,
  /** 0–1 fill to next milestone */
  progressToPlatinum: 0.62,
  helperText: '7 more policies to unlock Platinum rewards.',
} as const;

export const bonusStrip = {
  text: 'Festive bonus: earn 1.2× on phone policies issued before 15 Apr.',
} as const;

export const quickActions = [
  {
    id: 'issue',
    title: 'Issue new policy',
    subtitle: 'Phone or EV battery quote',
    icon: 'policy' as const,
  },
  {
    id: 'endorse',
    title: 'Initiate endorsement',
    subtitle: 'Update an existing policy',
    icon: 'endorse' as const,
  },
] as const;

/** Full-screen festive flow (title + subtitle). */
export const festiveOffer = {
  title: 'Festival offer',
  subtitle: '5% off new phone & EV battery policies',
} as const;

/** Single-line banner under Quick actions — non-interactive. */
export const festiveBannerLine = 'Festival offer · 5% off phone & EV battery' as const;

export const policyStatus = {
  pending: { label: 'Pending policies', shortLabel: 'Pending', value: 8 },
  inProgress: { label: 'In progress', shortLabel: 'In progress', value: 4 },
  rejected: { label: 'Rejected', shortLabel: 'Rejected', value: 2 },
} as const;

export const endorsements = [
  {
    id: 'endo-1',
    policyId: 'ACK-PHO-77291',
    dateLabel: 'Submitted · 28 Mar 2026',
    status: 'Pending at insurer' as const,
  },
  {
    id: 'endo-2',
    policyId: 'ACK-BAT-44102',
    dateLabel: 'Updated · 22 Mar 2026',
    status: 'Approved' as const,
  },
  {
    id: 'endo-3',
    policyId: 'ACK-PHO-66100',
    dateLabel: 'Submitted · 18 Mar 2026',
    status: 'Rejected' as const,
  },
] as const;

export const relationshipManager = {
  name: 'Neha Sharma',
  subtitle: 'Phone & EV battery partner support',
  avatarUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&q=80',
} as const;

export const whatsNewItems = [
  {
    id: 'wn-1',
    title: 'Faster phone damage quotes',
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=560&h=320&fit=crop&q=80',
  },
  {
    id: 'wn-2',
    title: 'EV battery cover refresher',
    imageUrl:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=560&h=320&fit=crop&q=80',
  },
  {
    id: 'wn-3',
    title: 'Screen & theft claims 101',
    imageUrl:
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=560&h=320&fit=crop&q=80',
  },
] as const;

export type TabId = 'dashboard' | 'search' | 'training' | 'growth' | 'profile';

export const bottomTabs: {
  id: TabId;
  label: string;
}[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'search', label: 'Search' },
  { id: 'training', label: 'Training' },
  { id: 'growth', label: 'Growth' },
  { id: 'profile', label: 'Profile' },
];
