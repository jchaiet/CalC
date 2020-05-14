import * as Keychain from 'react-native-keychain'
import * as c from './constants'
import Firebase, { db } from '../../../config/Firebase'

import { Alert } from 'react-native';

const saveCredentialsStart = () => ({
  type: c.SAVE_CREDENTIALS_START
})

const saveCredentialsSuccess = (email) => ({
  type: c.SAVE_CREDENTIALS_SUCCESS,
  email
})

const saveCredentialsFail = (error) => ({
  type: c.SAVE_CREDENTIALS_FAIL,
  error
})

export const saveCredentials = (email, password) => async (dispatch) => {
  dispatch(saveCredentialsStart())
  try{
    await Keychain.setGenericPassword(email, password)
    dispatch(saveCredentialsSuccess(email))
  } catch (err){
    console.log('Error saving credentials: ', err)
    dispatch(saveCredentialsFail('Error saving credentials in keychain'))
  }
}

const loginStart = () => ({
  type: c.LOGIN_START
})

const loginSuccess = (user) => ({
  type: c.LOGIN_SUCCESS,
  user
})

const loginFail = (error) => ({
  type: c.LOGIN_FAIL,
  error
})

export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart())
  if(email.length <= 0){
    dispatch(loginFail('Please enter your email'))
    return
  }
  if(password.length <= 0){
    dispatch(loginFail('Please enter your password'))
    return
  }
  try {
    const res = await Firebase.auth().signInWithEmailAndPassword(email, password)
    if(res){
      await dispatch(saveCredentials(email, password))

      const user = await db.collection('users')
      .doc(res.user.uid)
      .get()

      dispatch(loginSuccess(user.data()))
    }
  } catch (e){
    let error;
    if(e.code === 'auth/wrong-password') {
      error = 'The password you entered is incorrect'
    }else if(e.code === 'auth/user-not-found') {
      error = 'We could not find your account'
    }else{
      error = 'There was an error logging you in'
    }
    dispatch(loginFail(error))
  }
}
/*
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

export const getUser = uid => async (dispatch) => {
  dispatch(getUserStart())
  try {
    const user = await db.collection('users')
    .doc(uid)
    .get()

    console.log(user.data())
    
    dispatch(getUserSuccess(user.data()))
  } catch (e){
    dispatch(getUserFail('Error getting user data'))
  }
}*/