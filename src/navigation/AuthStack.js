import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpStart from '../components/SignUp';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator
      mode= "modal"
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0
        }
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{
          title: '',
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack(null)}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='x'
                  size={24}
                />
              </View>
            </TouchableOpacity>
        })}
      />
      {/*<Stack.Screen 
        name="SignUpStart" 
        component={SignUpStart}
        options={{
          title: '',
          headerShown: false
        }}
      />*/}
    </Stack.Navigator>
  )
}