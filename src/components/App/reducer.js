import * as login from '../Login'
import * as signup from '../Signup'

const initialState = {
  user: {}
}

const actionHandlers = {
  [login.constants.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      user: action.user
    }
  },
  [signup.constants.SIGNUP_SUCCESS]: (state, action) => {
    return {
      ...state,
      user: action.user
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}