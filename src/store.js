import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import { reducer as LoginReducer } from './components/Login'
import { reducer as SignupReducer } from './components/Signup'
import { reducer as AppReducer } from './components/App'

const rootReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
  App: AppReducer
})

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