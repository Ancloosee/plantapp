import * as React from 'react';
import palette from '../../constants/palette';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../containers/Home';
import SVGManager from '../../components/SVGManager';
import styles from './styles';

const Tab = createBottomTabNavigator();

const BASE_TAB_OPTIONS = {
  headerShown: false,
};

const BottomTabNavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: palette.white,
        tabBarInactiveTintColor: palette.darkWhite,
        tabBarIcon: ({focused, color, size}) => {
          return SVGManager.getIconFactory(
            SVGManager.MANIFEST[route.name.toUpperCase()],
          )({fill: focused ? palette.white : palette.darkWhite});
        },
      })}>
      <Tab.Screen
        options={{
          ...BASE_TAB_OPTIONS,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          ...BASE_TAB_OPTIONS,
        }}
        name="Search"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          ...BASE_TAB_OPTIONS,
        }}
        name="Wishlist"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          ...BASE_TAB_OPTIONS,
        }}
        name="Cart"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigationBar;
