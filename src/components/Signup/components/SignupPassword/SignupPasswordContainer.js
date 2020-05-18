import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignUpPassword from './SignUpPassword';

class SignUpPasswordContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      password: '',
      confirm_password: '',
      focusedInput: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.signingUp && !this.props.signingUp){
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

  componentDidMount() {
    this.setState({ 
      password: '',
      confirm_password: ''
    })
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

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleSetPassword = () => {
    const passwordFromState = this.state.password;
    const confirmPasswordFromState = this.state.confirm_password;

    this.props.signupActions.setPassword(passwordFromState, confirmPasswordFromState, this.props.navigation)
    this.setState({
      password: '',
      confirm_password: ''
    })    
    confirmRef.clear()
    passwordRef.clear()
  }

  render(){
    return(
      <SignUpPassword
        {...this.props}
        focusedInput={this.state.focusedInput}
        onChange={this.onChange}
        onFocusChange={(input) => this.onFocusChange(input)}
        onBlurChange={(input) => this.onBlurChange(input)}
        handleSetPassword={this.handleSetPassword}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.SignUp
}

const mapDispatchToProps = dispatch => {
  return {
    signupActions: bindActionCreators(signupActions, dispatch)
  }
}

const ConnectedSignUpPassword = connect(mapStateToProps, mapDispatchToProps)(SignUpPasswordContainer)

export { ConnectedSignUpPassword as SignUpPassword }