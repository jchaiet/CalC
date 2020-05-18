import { NavigationActions, StackActions } from 'react-navigation'
import * as Keychain from 'react-native-keychain'
import * as c from './constants'
import Firebase, { db } from '../../../config/Firebase'
import { Alert } from 'react-native'

const userLogout = () => ({
  type: 'USER_LOGOUT'
})

const getUserStart = () => ({
  type: c.GET_USER_START
})

const getUserSuccess = (user) => ({
  type: c.GET_USER_SUCCESS,
  user
})

const getUserFail = (error) => ({
  type: c.GET_USER_FAIL,
  error
})

export const logout = (navigation) => async (dispatch) => {
  try {
    await Firebase.auth().signOut().then(() => {
      dispatch(userLogout())
      navigation.navigate('Welcome')
    }).catch(error => {
      Alert.alert(error)
    });
   
  } catch(e){
    alert(e)
  }
}

export const getUser = (uid) => async (dispatch) => {
  dispatch(getUserStart())
  try {
    const user = await db.collection('users')
    .doc(uid)
    .get()

    dispatch(getUserSuccess(user.data()))
  } catch(e){
    alert(e)
    dispatch(getUserFail('Error retrieving user data'))
  }
}