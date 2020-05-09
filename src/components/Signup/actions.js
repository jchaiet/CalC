import * as Keychain from 'react-native'
import * as c from './constants'
import Firebase, { db } from '../../../config/Firebase'
import { NavigationActions } from 'react-navigation';

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

const signupEmailSuccess = (email) => ({
  type: c.SIGNUP_EMAIL_SUCCESS,
  email
})

export const setEmail = (email, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(email.length <= 0){
    dispatch(signupFail('Please enter your email'))
    return
  }
  try {
    dispatch(signupEmailSuccess(email))
    navigation.navigate(
      'SigningUpView',
      {},
      NavigationActions.navigate({ 
        routeName: 'SignupPassword' 
    }))
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupPasswordSuccess = (password) => ({
  type: c.SIGNUP_PASSWORD_SUCCESS,
  password
})

export const setPassword = (password, confirm_password, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(password.length <= 0){
    dispatch(signupFail('Please enter a password'))
    return
  }
  
  if(password !== confirm_password){
    dispatch(signupFail('The passwords you entered do not match'))
    return
  }

  try {
    dispatch(signupPasswordSuccess(password))
    navigation.navigate({ routeName: 'SignupName' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupNameSuccess = (first_name, last_name) => ({
  type: c.SIGNUP_NAME_SUCCESS,
  first_name,
  last_name
})

export const setName = (first_name, last_name, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(first_name.length <= 0){
    dispatch(signupFail('Please enter your name'))
    return
  }
  try {
    dispatch(signupNameSuccess(first_name, last_name))
    navigation.navigate({ routeName: 'SignupGender' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupGenderSuccess = (gender) => ({
  type: c.SIGNUP_GENDER_SUCCESS,
  gender
})

export const setGender = (gender, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(gender.length <= 0){
    dispatch(signupFail('Please select your gender'))
    return
  }
  
  try {
    dispatch(signupGenderSuccess(gender))
    navigation.navigate({ routeName: 'SignupBirthday' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupBirthdaySuccess = (birthday) => ({
  type: c.SIGNUP_BIRTHDAY_SUCCESS,
  birthday
})

export const setBirthday = (birthday, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(birthday.length <= 0){
    dispatch(signupFail('Please enter your birthday'))
    return
  }
  
  try {
    dispatch(signupBirthdaySuccess(birthday))
    navigation.navigate({ routeName: 'SignupHeight' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupHeightSuccess = (height) => ({
  type: c.SIGNUP_HEIGHT_SUCCESS,
  height,
})

export const setHeight = (height, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(height.length <= 0){
    dispatch(signupFail('Please enter your height'))
    return
  }
  
  try {
    dispatch(signupHeightSuccess(height))
    navigation.navigate({ routeName: 'SignupWeight' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupWeightSuccess = (weight) => ({
  type: c.SIGNUP_WEIGHT_SUCCESS,
  weight,
})

export const setWeight = (weight, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(weight.length <= 0){
    dispatch(signupFail('Please enter your weight'))
    return
  }
  
  try {
    dispatch(signupWeightSuccess(weight))
    navigation.navigate({ routeName: 'SignupActivity' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}

const signupActivitySuccess = (activity) => ({
  type: c.SIGNUP_ACTIVITY_SUCCESS,
  activity
})

export const setActivity = (activity, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(activity.length <= 0){
    dispatch(signupFail('Please enter your activity level'))
    return
  }

  try {
    dispatch(signupActivitySuccess(activity))
    navigation.navigate({ routeName: 'SignupGoal' })
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
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

export const completeSignup = (email, first_name, last_name, password, gender, birthday, height, weight, activity, bmr, goal, navigation) => async (dispatch) => {
  dispatch(signupStart())
  if(goal.length <= 0){
    dispatch(signupFail('Please select your goal'))
    return
  }

  try {
    const res = await Firebase.auth().createUserWithEmailAndPassword(email, password)
    if(res){
      const user = {
        first_name,
        last_name,
        uid: res.user.uid,
        email,
        gender,
        birthday,
        height,
        weight,
        activity,
        bmr,
        goal
      }

      db.collection('users')
      .doc(user.uid)
      .set(user)

      await dispatch(saveCredentials(user.email, password));
      dispatch(signupSuccess(user));
      navigation.navigate({ routeName: 'SignedIn'})
    }
  } catch (e){
    console.log(e)
    dispatch(signupFail('Error signing up'))
  }
}