import * as c from './constants'

const initialState = {
  settingPassword: false,
  user: {},
  settingPasswordError: null,
  loggingIn: false,
  loginError: null
}

const actionHandlers = {
  [c.LOGIN_START]: (state) => {
    return {
      ...state,
      settingPassword: true,
      loggingIn: true
    }
  },
  [c.LOGIN_SUCCESS]: (state, action) => {
    return{
      ...state,
      settingPassword: false,
      settingPasswordError: null,
      user: action.user,
      loggingIn: false
    }
  },
  [c.LOGIN_FAIL]: (state, action) => {
    return {
      ...state,
      settingPassword: false,
      settingPasswordError: action.error,
      loggingIn: false,
      loginError: action.error
    }
  },
  [c.GET_USER_START]: (state) => {
    return {
      ...state,
    }
  },
  [c.GET_USER_SUCCESS]: (state, action) => {
    return{
      ...state,
      user: action.user,
    }
  },
  [c.GET_USER_FAIL]: (state, action) => {
    return {
      ...state,
      getUserError: action.error
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}