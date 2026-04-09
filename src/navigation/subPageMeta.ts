import type { SubPage } from './types';

export function getSubPageTitle(page: SubPage): string {
  switch (page.type) {
    case 'menu':
      return 'Menu';
    case 'profile':
      return 'Profile';
    case 'settings':
      return 'Settings';
    case 'notifications':
      return 'Notifications';
    case 'documents':
      return 'Statements & documents';
    case 'legal':
      return 'Privacy & legal';
    case 'signOut':
      return 'Sign out';
    case 'help':
      return 'Help & support';
    case 'redeem':
      return 'Redeem rewards';
    case 'platinumUnlock':
      return 'Platinum tier';
    case 'leaderboard':
      return 'Leaderboard';
    case 'levelUpGuide':
      return 'How to level up';
    case 'yourRank':
      return 'Your rank';
    case 'module':
      return page.title;
    case 'encash':
      return 'Encash';
    case 'issuePolicy':
      return 'New policy';
    case 'endorsement':
      return 'Endorsement';
    case 'endorsementsAll':
      return 'All endorsements';
    case 'policyStatusAll':
      return 'Policy pipeline';
    case 'pendingPolicies':
      return 'Pending';
    case 'inProgressPolicies':
      return 'In progress';
    case 'rejectedPolicies':
      return 'Rejected';
    case 'endorsementDetail':
      return page.policyId;
    case 'chatRm':
      return 'Neha Sharma';
    case 'callRm':
      return 'Call RM';
    case 'festiveOffer':
      return 'Festive rewards';
    case 'whatsNewStories':
      return 'What’s new';
    case 'whatsNew':
      return page.title;
    default: {
      const _x: never = page;
      void _x;
      return 'Page';
    }
  }
}
