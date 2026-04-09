import type { SubPage } from './types';
import {
  CallRmFlow,
  DocumentsFlow,
  LegalFlow,
  NotificationsFlow,
  ProfileFlow,
  SettingsFlow,
  SignOutFlow,
} from './flows/AccountFlows';
import {
  EndorsementDetailFlow,
  EndorsementsAllFlow,
  LeaderboardFlow,
  PolicyPipelineFlow,
  YourRankFlow,
} from './flows/DataFlows';
import { MenuFlow } from './flows/MenuFlow';
import {
  EncashFlow,
  EndorsementInitFlow,
  IssuePolicyFlow,
  RedeemFlow,
} from './flows/TradeFlows';
import {
  ChatRmFlow,
  FestiveOfferFlow,
  HelpFlow,
  LevelUpGuideFlow,
  PlatinumUnlockFlow,
  TrainingModuleFlow,
  WhatsNewArticleFlow,
} from './flows/SupportFlows';

export function SubPageBody({ page }: { page: SubPage }) {
  switch (page.type) {
    case 'menu':
      return <MenuFlow />;
    case 'profile':
      return <ProfileFlow />;
    case 'settings':
      return <SettingsFlow />;
    case 'notifications':
      return <NotificationsFlow />;
    case 'documents':
      return <DocumentsFlow />;
    case 'legal':
      return <LegalFlow />;
    case 'signOut':
      return <SignOutFlow />;
    case 'help':
      return <HelpFlow />;
    case 'redeem':
      return <RedeemFlow />;
    case 'platinumUnlock':
      return <PlatinumUnlockFlow />;
    case 'leaderboard':
      return <LeaderboardFlow />;
    case 'levelUpGuide':
      return <LevelUpGuideFlow />;
    case 'yourRank':
      return <YourRankFlow />;
    case 'module':
      return <TrainingModuleFlow page={page} />;
    case 'encash':
      return <EncashFlow />;
    case 'issuePolicy':
      return <IssuePolicyFlow />;
    case 'endorsement':
      return <EndorsementInitFlow />;
    case 'endorsementsAll':
      return <EndorsementsAllFlow />;
    case 'policyStatusAll':
    case 'pendingPolicies':
    case 'inProgressPolicies':
    case 'rejectedPolicies':
      return <PolicyPipelineFlow page={page} />;
    case 'endorsementDetail':
      return <EndorsementDetailFlow policyId={page.policyId} />;
    case 'chatRm':
      return <ChatRmFlow />;
    case 'callRm':
      return <CallRmFlow />;
    case 'festiveOffer':
      return <FestiveOfferFlow />;
    case 'whatsNewStories':
      return null;
    case 'whatsNew':
      return <WhatsNewArticleFlow page={page} />;
    default: {
      const _x: never = page;
      void _x;
      return null;
    }
  }
}
