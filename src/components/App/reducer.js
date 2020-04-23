import * as login from '../Login'

const initialState = {
  email: ''
}

const actionHandlers = {
  [login.constants.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      email: action.email
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}