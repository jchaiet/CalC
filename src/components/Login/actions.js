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
    console.log('added: ', email)
  } catch (err){
    console.log('Error saving credentials: ', err)
    dispatch(saveCredentialsFail('Error saving credentials in keychain'))
  }
}

const loginStart = () => ({
  type: c.LOGIN_START
})

const loginSuccess = (email) => ({
  type: c.LOGIN_SUCCESS,
  email
  //user
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
    await dispatch(saveCredentials(email, password))
    dispatch(loginSuccess(email))
  } catch (e){
    dispatch(loginFail('Error logging in'))
  }
  
}