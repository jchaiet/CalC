import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import { reducer as LoginReducer } from './components/Login'
import { reducer as SignupReducer } from './components/Signup'
import { reducer as HomeReducer } from './components/Home'
import { reducer as AppReducer } from './components/App'


const appReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
  Home: HomeReducer,
  App: AppReducer
})

const rootReducer = (state, action) => {
  if(action.type === 'USER_LOGOUT') {
    persistConfig.storage.removeItem('persist:root')
    state = undefined
  }

  return appReducer(state, action)
}

const middleware = []
middleware.push(thunk)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)

export default { store, persistor }