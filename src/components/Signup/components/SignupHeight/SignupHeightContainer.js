import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignupHeight from './SignupHeight';

class SignupHeightContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      feet: '',
      inches: '',
      height: '',
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

  onFocusChange = (input) => {
    this.setState({
      focusedInput: input
    })
    //this.setState({ isFocused: true })
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

  handleSetHeight = () => {
    let feet = +this.state.feet;
    let inches = +this.state.inches;

    const heightFromState = (feet * 12) + inches;

    this.props.signupActions.setHeight(heightFromState, this.props.navigation)
  }

  render(){
    return(
      <SignupHeight
        {...this.props}
        focusedInput={this.state.focusedInput}
        onChange={this.onChange}
        onFocusChange={(input) => this.onFocusChange(input)}
        onBlurChange={(input) => this.onBlurChange(input)}
        handleSetHeight={this.handleSetHeight}
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

const ConnectedSignupHeight = connect(mapStateToProps, mapDispatchToProps)(SignupHeightContainer)

export { ConnectedSignupHeight as SignupHeight }