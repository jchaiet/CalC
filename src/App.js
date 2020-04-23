import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

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
    console.log(reduxStore.store.getState())

    if(this.state.checkUserSignedIn){
      const Navigator = createAppNavigator(this.state.userSignedIn)
      return (
        <Provider store={reduxStore.store}>
          <PersistGate loading={<Spinner />} persistor={reduxStore.persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      )
    }else{
      return <Spinner />
    }
   
  }
}