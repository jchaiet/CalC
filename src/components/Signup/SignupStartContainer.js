import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from './actions'
import SignUpStart from './SignUpStart';

class SignUpStartContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      //email: '',
      isFocused: false
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
      email: this.props.email
    })
  }

  onFocusChange = () => {
    input.setNativeProps({
      style: {
        width: 325,
        margin: 10,
        padding: 15,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ebebeb',
        backgroundColor: '#fff',
        textAlign: 'left'
      }
    })
    //this.setState({ isFocused: true })
  }

  onBlurChange = () => {
    input.setNativeProps({
      style: {
        width: 325,
        margin: 10,
        padding: 15,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ebebeb',
        backgroundColor: '#ebebeb',
        textAlign: 'left'
      }
    })
    //this.setState({ isFocused: false })
  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }
  
  handleSetEmail = () => {
    const emailFromState = this.state.email;
    this.props.signupActions.setEmail(emailFromState, this.props.navigation)  
  }

  render(){
    return(
      <SignUpStart
        {...this.props}
        isFocused={this.state.isFocused}
        onChange={this.onChange}
        onFocusChange={this.onFocusChange}
        onBlurChange={this.onBlurChange}
        handleSetEmail={this.handleSetEmail}
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

const ConnectedSignUpStart = connect(mapStateToProps, mapDispatchToProps)(SignUpStartContainer)

export { ConnectedSignUpStart as SignUpStart }