import {colors} from './colors';
import {
  AccountScreen,
  DealsScreen,
  HomeScreen,
  NewsScreen,
} from '../../screens';

export const tabNavigatorOptions = {
  tabBarActiveTintColor: colors.primary,
};

export const tabStackList = [
  {
    name: 'Home',
    component: HomeScreen,
    iconName: 'home',
  },
  {
    name: 'Deals',
    component: DealsScreen,
    iconName: 'tag',
  },
  {
    name: 'News',
    component: NewsScreen,
    iconName: 'newspaper',
  },
  {
    name: 'Account',
    component: AccountScreen,
    iconName: 'account',
  },
];
