import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignupName from './SignupName';

class SignupNameContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
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
      first_name: this.props.first_name,
      last_name: this.props.last_name
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
  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleSetName = () => {
    const firstNameFromState = this.state.first_name;
    const lastNameFromState = this.state.last_name;

    this.props.signupActions.setName(firstNameFromState, lastNameFromState, this.props.navigation) 
  }

  render(){
    return(
      <SignupName
        {...this.props}
        focusedInput={this.state.focusedInput}
        onChange={this.onChange}
        onFocusChange={(input) => this.onFocusChange(input)}
        onBlurChange={(input) => this.onBlurChange(input)}
        handleSetName={this.handleSetName}
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

const ConnectedSignupName = connect(mapStateToProps, mapDispatchToProps)(SignupNameContainer)

export { ConnectedSignupName as SignupName }