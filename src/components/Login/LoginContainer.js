import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Keychain from 'react-native-keychain'
import { NavigationActions, StackActions } from 'react-navigation';

import * as loginActions from './actions'
import Login from './Login';

class LoginContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '' 
    }
  }

  componentDidUpdate(prevProps) {
    if(Object.keys(this.props.user).length > 0){
      this.props.navigation.navigate({ routeName: 'SignedIn'})
      console.log('signed in')
    }
  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleNavToSignup = () => {
    this.props.navigation.navigate('Signup')
  }

  handleLogin = () => {
    const emailFromState = this.state.email;
    const passwordFromState = this.state.password;
    
    this.props.loginActions.login(emailFromState, passwordFromState)
  }
  
  render(){
    return(
      <Login 
        {...this.props}
        handleNavToSignup={this.handleNavToSignup}
        onChange={this.onChange}
        handleLogin={this.handleLogin}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.Login
}

const mapDispatchToProps = dispatch => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

export { ConnectedLogin as Login }