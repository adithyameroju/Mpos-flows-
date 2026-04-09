/**
 * Static content for Search, Training, and Profile tabs — replace with API data in production.
 * Product scope: phone insurance and EV battery insurance.
 */

export const searchQuickFilters = [
  { id: 'phone', label: 'Phone' },
  { id: 'battery', label: 'EV battery' },
  { id: 'policy', label: 'Policy no.' },
] as const;

export type SearchRecentItem = {
  id: string;
  label: string;
  meta: string;
  kind: 'phone' | 'battery';
};

export const searchRecentItems: SearchRecentItem[] = [
  { id: 'r1', label: 'ACK-PHO-77291', meta: 'Phone · Renewed Mar 2026', kind: 'phone' },
  { id: 'r2', label: 'ACK-BAT-44102', meta: 'EV battery · Active', kind: 'battery' },
  { id: 'r3', label: 'ACK-PHO-66100', meta: 'Phone · Endorsement pending', kind: 'phone' },
];

export const trainingFeatured = {
  title: 'EV battery cover refresher',
  subtitle: 'Modules 2 of 5 · ~12 min left',
  progress: 0.4,
} as const;

export type TrainingModule = {
  id: string;
  title: string;
  duration: string;
  status: 'in_progress' | 'not_started' | 'done';
};

export const trainingModules: TrainingModule[] = [
  { id: 'm1', title: 'Phone insurance essentials', duration: '8 min', status: 'done' },
  { id: 'm2', title: 'EV battery cover refresher', duration: '18 min', status: 'in_progress' },
  { id: 'm3', title: 'Claims: screen, theft & liquid damage', duration: '12 min', status: 'not_started' },
  { id: 'm4', title: 'Endorsements & IMEI / serial updates', duration: '10 min', status: 'not_started' },
  { id: 'm5', title: 'Compliance & partner documentation', duration: '15 min', status: 'not_started' },
];
