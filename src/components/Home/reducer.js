import * as c from './constants'

const initialState = {
  user: {},
  getUserError: null
}

const actionHandlers = {
  [c.USER_LOGOUT]: (state) => {
    return {
      ...state,
    }
  },
  [c.GET_USER_START]: (state) => {
    return {
      ...state,
    }
  },
  [c.GET_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      user: action.user
    }
  },
  [c.GET_USER_FAIL]: (state, action) => {
    return {
      ...state,
      getUserError: action.error,
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}