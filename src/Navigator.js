import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Login } from './components/Login';
import { Home } from './components/Home';
import { Signup } from './components/Signup'

const SignedInView = createSwitchNavigator(
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

const SignedOutView = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export const createAppNavigator = (signedIn = false) => {
  const appSwitchNavigator = createSwitchNavigator(
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
  return createAppContainer(appSwitchNavigator)
}