import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Keychain from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import * as welcomeActions from './actions'

import Welcome from './Welcome';

class WelcomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if(Object.keys(this.props.user).length > 0){
      this.props.navigation.navigate({ routeName: 'SignedIn'})
    }
  }

  handleNavToSignup = () => {
    this.props.welcomeActions.reset();
    this.props.navigation.navigate('SignupStart')
  }

  handleNavToLogin = () => {
    this.props.navigation.navigate('Login')
  }
  
  render(){
    console.log(this.props)
    return(
      <Welcome 
        {...this.props}
        handleNavToSignup={this.handleNavToSignup}
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