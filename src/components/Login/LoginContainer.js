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

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.loggingIn && !this.props.loggingIn){
      const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: 'SignedIn' })
        ]
      })
      this.props.navigation.dispatch(resetAction)
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
    this.setState({
      email: '',
      password: ''
    })
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