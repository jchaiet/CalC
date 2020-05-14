import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaView } from 'react-navigation';

import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode } 

import reduxStore from './store';
import { isSignedIn } from './utils'

import { Spinner } from 'native-base'
import { createAppNavigator } from './Navigator';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userSignedIn: false,
      checkUserSignedIn: false
    }
  }

  componentDidMount = async () => {
    const userSignedIn = await isSignedIn()
    this.setState({
      userSignedIn,
      checkUserSignedIn: true
    })
  }

  render() {
    if(this.state.checkUserSignedIn){
      const Navigator = createAppNavigator(this.state.userSignedIn)
      return (
        <Provider store={reduxStore.store}>
          <PersistGate loading={<Spinner />} persistor={reduxStore.persistor}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
              <Navigator />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      )
    }else{
      return <Spinner />
    }
   
  }
}