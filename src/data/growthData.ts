/**
 * Growth screen — copy aligned to design reference.
 * Product scope: phone insurance and EV battery insurance.
 */

export const growthHero = {
  kicker: 'Adithya, you are now in',
  tierHeadline: 'Gold tier',
} as const;

export const growthTierProgress = {
  tierLabels: ['Silver', 'Gold', 'Platinum'] as const,
  tierTargets: ['20 policies', '50 policies', '80 policies'] as const,
  /** Progress bar fill (0–1); marker + arrow align to this position */
  barFillPercent: 0.45,
  activeTierIndex: 1,
  helperText: '12 more phone & EV battery policies to reach Platinum tier',
} as const;

/** Gold tier benefits — bold title + subtext per row (matches reference). */
export const goldTierBenefits = [
  {
    id: 'g1',
    title: '10,000 Bonus',
    subtitle: 'Bonus for policy active',
  },
  {
    id: 'g2',
    title: '500 rs Amazon gift card',
    subtitle: 'Redeemable Amazon gift card',
  },
  {
    id: 'g3',
    title: '5% more commission percentage',
    subtitle: 'Higher commission on phone & EV battery products',
  },
  {
    id: 'g4',
    title: 'Advanced training modules',
    subtitle: 'Access to advanced training modules for 30 days',
  },
] as const;

/** Platinum tier — muted preview on locked card. */
export const platinumTierBenefits = [
  {
    id: 'p1',
    title: '15,000 Bonus',
    subtitle: 'Bonus for policy active',
  },
  {
    id: 'p2',
    title: '1500 rs Amazon gift card',
    subtitle: 'Redeemable Amazon gift card',
  },
  {
    id: 'p3',
    title: '8% more commission percentage',
    subtitle: 'Higher commission on phone & EV battery products',
  },
  {
    id: 'p4',
    title: 'Premium training modules',
    subtitle: 'Access to premium modules for 90 days',
  },
] as const;

export const platinumLocked = {
  unlockHint: '15 more phone & EV battery policies to unlock',
} as const;

export const championsLeaderboard = [
  {
    id: 'c1',
    rank: 1,
    name: 'Rahul Verma',
    tier: 'Platinum' as const,
    policies: 156,
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&q=80',
  },
  {
    id: 'c2',
    rank: 2,
    name: 'Priya Nair',
    tier: 'Platinum' as const,
    policies: 142,
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&q=80',
  },
  {
    id: 'c3',
    rank: 3,
    name: 'Arjun Mehta',
    tier: 'Gold' as const,
    policies: 128,
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80',
  },
] as const;

export const championsYou = {
  rank: 78,
  name: 'Adithya',
  tier: 'Gold' as const,
  policies: 24,
  avatarUrl:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&q=80',
} as const;

export const levelUpSteps = [
  {
    id: 's1',
    step: 1,
    title: 'Complete training modules',
    subtitle: 'Finish modules assigned in the Training tab.',
  },
  {
    id: 's2',
    step: 2,
    title: 'Keep selling more policies',
    subtitle: 'Volume and consistency move you toward Platinum.',
  },
  {
    id: 's3',
    step: 3,
    title: 'Cross-sell phone + EV battery',
    subtitle: 'Pairing battery cover with phone upgrades counts toward tier goals.',
  },
] as const;

export const keepLearningItems = [
  {
    id: 'kl1',
    title: 'New GST policy',
    subtitle: 'Compliance refresh',
    kind: 'gst' as const,
  },
  {
    id: 'kl2',
    title: 'Phone insurance',
    subtitle: 'Claims & endorsements',
    kind: 'image' as const,
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=560&h=320&fit=crop&q=80',
  },
  {
    id: 'kl3',
    title: 'EV battery & health cover',
    subtitle: 'Pitch tips',
    kind: 'image' as const,
    imageUrl:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=560&h=320&fit=crop&q=80',
  },
] as const;
