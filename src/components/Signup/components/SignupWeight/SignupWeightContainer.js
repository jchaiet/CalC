import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignupWeight from './SignupWeight';

class SignupWeightContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weight: '',
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

  handleSetWeight = () => {
    let weightFromState = +this.state.weight;

    this.props.signupActions.setWeight(weightFromState, this.props.navigation)
  }

  render(){
    return(
      <SignupWeight
        {...this.props}
        focusedInput={this.state.focusedInput}
        onChange={this.onChange}
        onFocusChange={(input) => this.onFocusChange(input)}
        onBlurChange={(input) => this.onBlurChange(input)}
        handleSetWeight={this.handleSetWeight}
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

const ConnectedSignupWeight = connect(mapStateToProps, mapDispatchToProps)(SignupWeightContainer)

export { ConnectedSignupWeight as SignupWeight }