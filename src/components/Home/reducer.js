import * as c from './constants'

const initialState = {}

const actionHandlers = {
  [c.USER_LOGOUT]: (state) => {
    return {
      ...state,
    }
  }
}

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action)
  }
  return state
}