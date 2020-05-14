import { NavigationActions, StackActions } from 'react-navigation'
import * as Keychain from 'react-native-keychain'
import * as c from './constants'

const signupReset = () => ({
  type: 'CLEAR'
})

export const reset = () => async (dispatch) => {
  try {
    await dispatch(signupReset())
  } catch(e){
    alert(e)
  }
}