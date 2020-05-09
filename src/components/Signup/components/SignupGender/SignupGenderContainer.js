import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignupGender from './SignupGender';

const genders = [
  {
    label: "Male",
    value: "male"
  },
  {
    label: "Female",
    value: "female"
  }
];

const placeholder = {
  label: 'Please select your gender',
  value: null
}

class SignupGenderContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gender: undefined,
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
      gender: this.props.gender
    })
  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleSetGender = () => {
    const genderFromState = this.state.gender;
    this.props.signupActions.setGender(genderFromState, this.props.navigation)
  }

  render(){
    return(
      <SignupGender
        {...this.props}
        placeholder={placeholder}
        gender={this.state.gender}
        genders={genders}
        onChange={this.onChange}
        handleSetGender={this.handleSetGender}
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

const ConnectedSignupGender = connect(mapStateToProps, mapDispatchToProps)(SignupGenderContainer)

export { ConnectedSignupGender as SignupGender }