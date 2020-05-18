import { NavigationActions, StackActions } from 'react-navigation'
import * as Keychain from 'react-native-keychain'
import * as c from './constants'
import { db } from '../../../config/Firebase'

const signupReset = () => ({
  type: 'CLEAR'
})

const getUserSuccess = (user) => ({
  type: c.GET_USER,
  user,
})

export const reset = () => async (dispatch) => {
  try {
    await dispatch(signupReset())
  } catch(e){
    alert(e)
  }
}

export const getUser = uid => async (dispatch) => {
  try {
    const user = await db.collection('users')
      .doc(uid)
      .get()

      dispatch(getUserSuccess(user))
  } catch(e) {
    alert(e)
  }
}