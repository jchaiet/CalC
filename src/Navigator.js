import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Welcome } from './components/Welcome'
import { Login } from './components/Login';
import { Home } from './components/Home';
import { SignupStart } from './components/Signup'
import { SignupPassword } from './components/Signup/components/SignupPassword'
import { SignupName } from './components/Signup/components/SignupName'
import { SignupGender } from './components/Signup/components/SignupGender'
import { SignupBirthday } from './components/Signup/components/SignupBirthday'
import { SignupBiometrics } from './components/Signup/components/SignupBiometrics'
import { SignupActivity } from './components/Signup/components/SignupActivity'
import { SignupGoal } from './components/Signup/components/SignupGoal'


const SignedInView = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: ''
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
)

const SignedOutView = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        title: ''
      }
    },
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='x'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupStart: {
      screen: SignupStart,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () =>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='x'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    }
  },
  {
    initialRouteName: 'Welcome',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
)

const SigningUpView = createStackNavigator(
  {
    SignupPassword: {
      screen: SignupPassword,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupStart')}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupName: {
      screen: SignupName,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupGender: {
      screen: SignupGender,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupBirthday: {
      screen: SignupBirthday,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupBiometrics: {
      screen: SignupBiometrics,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupActivity: {
      screen: SignupActivity,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignupGoal: {
      screen: SignupGoal,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Feather'
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    }
  },
  {
    initialRouteName: 'SignupPassword',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
)

export const createAppNavigator = (signedIn = false) => {
  const appStackNavigator = createStackNavigator(
    {
      SignedIn: {
        screen: SignedInView
      },
      SignedOut: {
        screen: SignedOutView
      },
      SigningUpView: {
        screen: SigningUpView
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      headerMode: 'none',
    }
  )
  return createAppContainer(appStackNavigator)
}