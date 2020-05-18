import React, { useState, useContext } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as welcomeActions from './actions'

import { isSignedIn } from '../../utils'

import Welcome from './Welcome';

class WelcomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  handleNavToSignUp = () => {
    welcomeActions.reset();
    this.props.navigation.navigate('SignUp', {screen: 'SignUpStart'})
  }

  handleNavToLogin = () => {
    this.props.navigation.navigate('Login')
  }
  
  render(){
    return(
      <Welcome 
        {...this.props}
        handleNavToSignUp={this.handleNavToSignUp}
        handleNavToLogin={this.handleNavToLogin}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.App
}

const mapDispatchToProps = dispatch => {
  return {
    welcomeActions: bindActionCreators(welcomeActions, dispatch)
  }
}

const ConnectedWelcome = connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)

export { ConnectedWelcome as Welcome }