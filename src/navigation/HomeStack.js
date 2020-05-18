import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../components/Home';
import AddDateContainer from '../components/AddDate/AddDateContainer';

const Stack = createStackNavigator();

export default SignUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Home}
      />
      <Stack.Screen
        name="Add Date"
        component={AddDateContainer}
      />
    </Stack.Navigator>
  )
}