import {colors} from './colors';
import {
  AccountScreen,
  DealsScreen,
  HomeScreen,
  NewsScreen,
} from '../../screens';
import {styles} from '../../components/styles';
import {createHeader} from '../../components/Header';

export const tabNavigatorOptions = {
  tabBarStyle: styles.tabBackground,
  tabBarActiveTintColor: colors.secondary,
};

export const headerOptions = {
  headerTitle: () => createHeader(),
  headerStyle: {
    backgroundColor: colors.complementary,
  },
  headerTitleAlign: 'center',
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
