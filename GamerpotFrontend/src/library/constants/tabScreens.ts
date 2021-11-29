import {colors} from './colors';
import {DealsScreen, NewsScreen} from '../../screens';
import {styles} from '../../components/styles';
import {fonts} from './fonts';
import HomeStackScreen from '../../navigators/HomeStackScreen';
import AccountStackScreen from '../../navigators/AccountStackScreen';

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
    component: HomeStackScreen,
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
    component: AccountStackScreen,
    iconName: 'account',
  },
];
