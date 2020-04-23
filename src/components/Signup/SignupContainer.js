import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from './actions'
import Signup from './Signup';

class SignupContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
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

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleSignup = () => {
    const firstNameFromState = this.state.first_name;
    const lastNameFromState = this.state.last_name;
    const emailFromState = this.state.email;
    const passwordFromState = this.state.password;
    const confirmPasswordFromState = this.state.confirm_password;

    this.props.signupActions.signup(firstNameFromState, lastNameFromState, emailFromState, passwordFromState, confirmPasswordFromState)
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    })    
  }

  render(){
    return(
      <Signup 
        {...this.props}
        onChange={this.onChange}
        handleSignup={this.handleSignup}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.Signup
}

const mapDispatchToProps = dispatch => {
  return {
    signupActions: bindActionCreators(signupActions, dispatch)
  }
}

const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(SignupContainer)

export { ConnectedSignup as Signup }