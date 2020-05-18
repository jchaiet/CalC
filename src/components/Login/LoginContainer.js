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
      password: '',
      focusedInput: null
    }
  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  onFocusChange = (input) => {
    this.setState({
      focusedInput: input
    })
  }

  onBlurChange = (input) => {
    this.setState(state => {
      if(state.focusedInput === input) {
        return { focusedInput: null }
      }
      return null
    })
    //this.setState({ isFocused: false })
  }

  handleNavToForgotPassword = () => {
    //this.props.navigation.navigate('SignUp')
  }

  handleLogin = () => {
    const emailFromState = this.state.email;
    const passwordFromState = this.state.password;
    
    this.props.loginActions.login(emailFromState, passwordFromState)
    this.setState({
      password: ''
    })
    passwordRef.clear()
  }
  
  render(){
    return(
      <Login 
        {...this.props}
        focusedInput={this.state.focusedInput}
        handleNavToForgotPassword={this.handleNavToForgotPassword}
        onChange={this.onChange}
        onFocusChange={(input) => this.onFocusChange(input)}
        onBlurChange={(input) => this.onBlurChange(input)}
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