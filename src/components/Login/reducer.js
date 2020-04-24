import * as c from './constants'

const initialState = {
  settingPassword: false,
  settingPasswordError: null,
  loggingIn: false,
  loginError: null,
  user: {},
  email: ''
}

const actionHandlers = {
  [c.SAVE_CREDENTIALS_START]: (state) => {
    return {
      ...state,
      settingPassword: true
    }
  },
  [c.SAVE_CREDENTIALS_SUCCESS]: (state, action) => {
    return {
      ...state,
      settingPassword: false,
      email: action.email,
      settingPasswordError: null
    }
  },
  [c.SAVE_CREDENTIALS_FAIL]: (state, action) => {
    return {
      ...state,
      settingPassword: false,
      settingPasswordError: action.error
    }
  },
  [c.LOGIN_START]: (state) => {
    return {
      ...state,
      loggingIn: true,
      loginError: null
    }
  },
  [c.LOGIN_SUCCESS]: (state, action) => {
    return{
      ...state,
      user: action.user,
      loggingIn: false,
      loginError: null,
    }
  },
  [c.LOGIN_FAIL]: (state, action) => {
    return {
      ...state,
      loggingIn: false,
      loginError: action.error
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}