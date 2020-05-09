import * as c from './constants'

const initialState = {
  settingPassword: false,
  signingUp: false,
  user: {},
  email: '',
  first_name: '',
  last_name: '',
  birthday: '',
  gender: undefined,
  height: '',
  weight: '',
  activity: '',
  goal: '',
  signupError: null,
}

const actionHandlers = {
  [c.SIGNUP_START]: (state) => {
    return {
      ...state,
      settingPassword: true,
      signingUp: true
    }
  },
  [c.SIGNUP_EMAIL_SUCCESS]: (state, action) => {
    return{
      ...state,
      email: action.email,
      signupError: null
    }
  },
  [c.SIGNUP_PASSWORD_SUCCESS]: (state, action) => {
    return{
      ...state,
      password: action.password,
      signupError: null
    }
  },
  [c.SIGNUP_NAME_SUCCESS]: (state, action) => {
    return{
      ...state,
      first_name: action.first_name,
      last_name: action.last_name,
      signupError: null
    }
  },
  [c.SIGNUP_GENDER_SUCCESS]: (state, action) => {
    return{
      ...state,
      gender: action.gender,
      signupError: null
    }
  },
  [c.SIGNUP_BIRTHDAY_SUCCESS]: (state, action) => {
    return{
      ...state,
      birthday: action.birthday,
      signupError: null
    }
  },
  [c.SIGNUP_HEIGHT_SUCCESS]: (state, action) => {
    return{
      ...state,
      height: action.height,
      signupError: null
    }
  },
  [c.SIGNUP_WEIGHT_SUCCESS]: (state, action) => {
    return{
      ...state,
      weight: action.weight,
      signupError: null
    }
  },
  [c.SIGNUP_ACTIVITY_SUCCESS]: (state, action) => {
    return{
      ...state,
      activity: action.activity,
      signupError: null
    }
  },
  [c.SIGNUP_GOAL_SUCCESS]: (state, action) => {
    return{
      ...state,
      goal: action.goal,
      signupError: null
    }
  },
  [c.SIGNUP_SUCCESS]: (state, action) => {
    return{
      ...state,
      settingPassword: false,
      settingPasswordError: null,
      user: action.user,
      signingUp: false
    }
  },
  [c.SIGNUP_FAIL]: (state, action) => {
    return {
      ...state,
      settingPassword: false,
      signupError: action.error,
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}