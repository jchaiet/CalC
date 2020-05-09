import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignupActivity from './SignupActivity';

const activities = [
  {
    label: "Not active at all",
    value: 1.2
  },
  {
    label: "Light (1-3 days per week)",
    value: 1.375
  },
  {
    label: "Moderate (3-5 days per week)",
    value: 1.55
  },
  {
    label: "Very (6-7 days per week)",
    value: 1.725
  },
  {
    label: "Extremely (2 x 6-7 days per week)",
    value: 1.9
  }
];

const placeholder = {
  label: 'Please select your activity level',
  value: null
}

class SignupActivityContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activity: undefined,
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

  handleSetActivity = () => {
    const activityFromState = this.state.activity;
    this.props.signupActions.setActivity(activityFromState, this.props.navigation) 
  }

  render(){
    return(
      <SignupActivity
        {...this.props}
        placeholder={placeholder}
        activity={this.state.activity}
        activities={activities}
        onChange={this.onChange}
        handleSetActivity={this.handleSetActivity}
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

const ConnectedSignupActivity = connect(mapStateToProps, mapDispatchToProps)(SignupActivityContainer)

export { ConnectedSignupActivity as SignupActivity }