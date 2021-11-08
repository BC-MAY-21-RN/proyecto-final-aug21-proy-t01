import {colors} from './colors';
import {
  AccountScreen,
  DealsScreen,
  HomeScreen,
  NewsScreen,
} from '../../screens';
import {styles} from '../../components/styles';
import {fonts} from './fonts';

export const tabNavigatorOptions = {
  tabBarStyle: styles.tabBackground,
  tabBarActiveTintColor: colors.secondary,
};

export const headerOptions = {
  headerTitle: 'GAMERPOT',
  headerStyle: {
    backgroundColor: colors.complementary,
  },
  headerTitleStyle: {
    fontFamily: fonts.header,
    color: colors.secondary,
    fontSize: 18,
  },
  headerTitleAlign: 'center',
};

export const navigationOptions = {...tabNavigatorOptions, ...headerOptions};

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
