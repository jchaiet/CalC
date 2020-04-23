import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Login } from './components/Login';
import { Home } from './components/Home';

import SignupContainer from './components/Signup/SignupContainer'

const SignedInView = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

const SignedOutView = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: SignupContainer
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
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
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      headerMode: 'none'
    }
  )
  return createAppContainer(appStackNavigator)
}