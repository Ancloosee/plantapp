import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigationBar from "./BottomTabBar";
import LoadingScreen from '../containers/Loading';

const Stack = createNativeStackNavigator();


function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Loading"
        component={LoadingScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={BottomTabNavigationBar}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
