import React from 'react';

export interface TabItem {
  route: string;
  data: Array<any>;
  render: React.ElementType;
}

export interface TabSectionProps {
  tabData: Array<TabItem>;
}
