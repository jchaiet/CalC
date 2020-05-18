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
import Navigation from './navigation/Navigator'

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
      return (
        <Provider store={reduxStore.store}>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
            <Navigation />
          </SafeAreaView>
        </Provider>
      )
    }else{
      return <Spinner />
    }
   
  }
}