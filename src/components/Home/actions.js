import { NavigationActions, StackActions } from 'react-navigation'
import * as Keychain from 'react-native'
import * as c from './constants'
import Firebase, { db } from '../../../config/Firebase'

const userLogout = () => ({
  type: 'USER_LOGOUT'
})

export const logout = (navigation) => async (dispatch) => {
  try {
    await Keychain.resetGenericPassword()
    await dispatch(userLogout())
    navigation.navigate({ routeName: 'SignedOut'})
  } catch(e){
    alert(e)
  }
}