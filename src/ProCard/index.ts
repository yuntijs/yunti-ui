import { ProCard as InternalProCard } from './Card';
import { ProCardContent } from './Content';
import { ProCardDescriptions } from './Descriptions';
import { ProCardHeader } from './Header';

export type { ProCardProps } from './Card';
export type { ProCardContentProps } from './Content';
export type { ProCardDescriptionsProps } from './Descriptions';
export type { ProCardHeaderProps } from './Header';

export const ProCard = InternalProCard as typeof InternalProCard & {
  Header: typeof ProCardHeader;
  Descriptions: typeof ProCardDescriptions;
  Content: typeof ProCardContent;
};
ProCard.Header = ProCardHeader;
ProCard.Content = ProCardContent;
ProCard.Descriptions = ProCardDescriptions;
