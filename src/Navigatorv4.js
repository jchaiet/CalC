import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { colors, fonts } from './styles/styles'

import { Welcome } from './components/Welcome'
import { Login } from './components/Login';
import { SignUpStart } from './components/SignUp'
import { SignUpPassword } from './components/SignUp/components/SignUpPassword'
import { SignUpName } from './components/SignUp/components/SignUpName'
import { SignUpGender } from './components/SignUp/components/SignUpGender'
import { SignUpBirthday } from './components/SignUp/components/SignUpBirthday'
import { SignUpHeight } from './components/SignUp/components/SignUpHeight'
import { SignUpWeight } from './components/SignUp/components/SignUpWeight'
import { SignUpActivity } from './components/SignUp/components/SignUpActivity'
import { SignUpGoal } from './components/SignUp/components/SignUpGoal'
import { Home } from './components/Home';
import AddDateContainer from './components/AddDate/AddDateContainer'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerShown: false
      })
    },
    AddDate: {
      screen: AddDateContainer,
      navigationOptions: ({navigation}) => ({
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
      })
    }  
  },
  {
    initialRouteName: 'Home',
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

const SignedInView = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({navigation}) => {
        let { routeName } = navigation.state.routes[navigation.state.index];
        let navigationOptions = {
          title: '',
          tabBarIcon: ({ tintColor }) => 
            <Icon
              name='home'
              size={36}
              color={tintColor}
            />
        }

        if(routeName === 'AddDate'){
          navigationOptions.tabBarVisible = false
        }

        return navigationOptions
      },
    },
    /*Add: {
      screen: AddDateContainer,
      navigationOptions: {
        tabBarLabel: 'Add Date',
        tabBarIcon: ({ tintColor }) => 
          <Icon
            name='plus-circle'
            size={36}
            color={tintColor}
          />
      },  
    },*/
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    tabBarOptions: {
      safeAreaInset: { bottom: 'never', top: 'never' },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.grey,
      iconStyle: {
        width: 35,
        height: 35,
        paddingVertical: 10
      },  
      tabStyle: {
        height: 55
    },
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        borderTopColor: 'transparent'
      }
    },
    defaultNavigationOptions: {
      headerMode: 'none'
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
              name='x'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpStart: {
      screen: SignUpStart,
      navigationOptions: ({navigation}) => ({
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
    SignUpPassword: {
      screen: SignUpPassword,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpStart')}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpName: {
      screen: SignUpName,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpGender: {
      screen: SignUpGender,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpBirthday: {
      screen: SignUpBirthday,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpHeight: {
      screen: SignUpHeight,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpWeight: {
      screen: SignUpWeight,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              type='Ionicons'
              name='ios-arrow-back'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpActivity: {
      screen: SignUpActivity,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    },
    SignUpGoal: {
      screen: SignUpGoal,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: () => 
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <View style={{paddingHorizontal:20}}>
            <Icon
              active
              name='chevron-left'
              size={24}
            />
          </View>
        </TouchableOpacity>
      })
    }
  },
  {
    initialRouteName: 'SignUpPassword',
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
      headerMode: 'none'
    }
  )
  return createAppContainer(appStackNavigator)
}