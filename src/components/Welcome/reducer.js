import * as c from './constants'

const initialState = {
  settingPassword: false,
  signingUp: false,
  email: '',
  first_name: '',
  last_name: '',
  gender: undefined,
  height: '',
  weight: '',
  activity: '',
  goal: '',
  signupError: null,
}

const actionHandlers = {
  [c.SIGNUP_RESET]: (state) => {
    return {
      ...state, ...initialState
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}