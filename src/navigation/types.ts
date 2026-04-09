/**
 * Full-screen sub-pages opened from dashboard / growth interactions.
 */
export type SubPage =
  | { type: 'menu' }
  | { type: 'profile' }
  | { type: 'settings' }
  | { type: 'notifications' }
  | { type: 'documents' }
  | { type: 'legal' }
  | { type: 'signOut' }
  | { type: 'help' }
  | { type: 'redeem' }
  | { type: 'platinumUnlock' }
  | { type: 'leaderboard' }
  | { type: 'levelUpGuide' }
  | { type: 'yourRank' }
  | { type: 'module'; id: string; title: string; subtitle?: string }
  | { type: 'encash' }
  | { type: 'issuePolicy' }
  | { type: 'endorsement' }
  | { type: 'endorsementsAll' }
  | { type: 'policyStatusAll' }
  | { type: 'pendingPolicies' }
  | { type: 'inProgressPolicies' }
  | { type: 'rejectedPolicies' }
  | { type: 'endorsementDetail'; policyId: string }
  | { type: 'chatRm' }
  | { type: 'callRm' }
  | { type: 'festiveOffer' }
  | { type: 'whatsNewStories'; startId: string }
  | { type: 'whatsNew'; id: string; title: string };
