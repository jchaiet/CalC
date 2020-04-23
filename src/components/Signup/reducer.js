import * as c from './constants'

const initialState = {
  settingPassword: false,
  settingPasswordError: null,
  signingUp: false,
  signupError: null,
  user: {}
}

const actionHandlers = {
  [c.SIGNUP_START]: (state) => {
    return {
      ...state,
      settingPassword: true,
      signingUp: true
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
      settingPasswordError: action.error,
      signingUp: false,
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