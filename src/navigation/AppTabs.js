import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../components/Home';

const Tabs = createBottomTabNavigator();

export default SignUpStack = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Dashboard"
        component={Home}
      />
      <Tabs.Screen
        name="Add Date"
        component={AddDateContainer}
      />
    </Tabs.Navigator>
  )
}