import * as Keychain from 'react-native-keychain'
import * as c from './constants'
import Firebase, { db } from '../../../config/Firebase'

import { Alert } from 'react-native';

const saveCredentialsStart = () => ({
  type: c.SAVE_CREDENTIALS_START
})

const saveCredentialsSuccess = (user) => ({
  type: c.SAVE_CREDENTIALS_SUCCESS,
  user
})

const saveCredentialsFail = (error) => ({
  type: c.SAVE_CREDENTIALS_FAIL,
  error
})

export const saveCredentials = (user, password) => async (dispatch) => {
  dispatch(saveCredentialsStart())
  try{
    await Keychain.setGenericPassword(user, password)
    dispatch(saveCredentialsSuccess(user))
  } catch (err){
    console.log('Error saving credentials: ', err)
    dispatch(saveCredentialsFail('Error saving credentials in keychain'))
  }
}

const signupStart = () => ({
  type: c.SIGNUP_START
})

const signupSuccess = (user) => ({
  type: c.SIGNUP_SUCCESS,
  user
})

const signupFail = (error) => ({
  type: c.SIGNUP_FAIL,
  error
})

export const signup = (first_name, last_name, email, password, confirmPassword) => async (dispatch)=> {
  dispatch(signupStart())
  if(email.length <= 0){
    dispatch(signupFail('Please enter your email'))
    return
  }
  if(password.length <= 0){
    dispatch(signupFail('Please enter your password'))
    return
  }
  if(password !== confirmPassword){
    dispatch(signupFail('Your passwords do not match'))
  }
  try {
    const res = await Firebase.auth().createUserWithEmailAndPassword(email, password)
    if(res){
      const user = {
        first_name: first_name,
        last_name: last_name,
        uid: res.user.uid,
        email: email
      }

      db.collection('users')
      .doc(user.uid)
      .set(user)

      await dispatch(saveCredentials(user.email, password))
      dispatch(signupSuccess(user))
    }
  } catch (e){
    dispatch(signupFail('Error signing up'))
  }
}