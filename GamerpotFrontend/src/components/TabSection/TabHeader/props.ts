import {TabItem} from '../props';

export interface TabHeaderProps {
  tabData: Array<TabItem>;
  activeTab: number;
  setActiveTab: (tab: number) => void;
}
