import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignupGoal from './SignupGoal';

class SignupGoalContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      goal: ''
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
      email: this.props.email,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      //password: this.props.password,
      gender: this.props.gender,
      birthday: this.props.birthday,
      age: this.calculateAge(new Date(this.props.birthday)),
      height: +this.props.height,
      weight: +this.props.weight,
      activity: +this.props.activity,
      bmr: this.calculateBMR(this.props.gender, this.calculateAge(new Date(this.props.birthday)), +this.props.height, +this.props.weight),
      goal: this.props.goal
    })
  }

  calculateAge(birthday) {
    let diff = Date.now() - birthday.getTime();
    let age_date = new Date(diff);

    return Math.abs(age_date.getUTCFullYear() - 1970);

  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleSetGoal = (goal) => {
    this.setState({
      goal: goal
    })
  }

  calculateBMR = (gender, age, height, weight) => {
    //Mifflin-St Jeor
    let BMR;
    //Convert to Metric
    let metWeight = weight / 2.205;
    let metHeight = height * 2.54;

    if(gender === 'female') {
      BMR = (10 * metWeight) + (6.25 * metHeight) - (5 * age) - 161;
    }

    if(gender === 'male') {
      BMR = (10 * metWeight) + (6.25 * metHeight) - (5 * age) + 5;
    }

    return Math.floor(BMR)
  }

  handleCompleteSignup = () => {
    const { email, first_name, last_name, gender, birthday, height, weight, activity, bmr, goal } = this.state;

    const password = this.props.password;
    const dataFromState = this.state;

    this.props.signupActions.completeSignup(email, first_name, last_name, password, gender, birthday, height, weight, activity, bmr, goal, this.props.navigation)
    this.setState({
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      gender: '',
      birthday: '',
      height: '',
      weight: '',
      activity: '',
      bmr: '',
      goal: ''
    })
  }

  render(){
    return(
      <SignupGoal
        {...this.props}
        bmr={this.state.bmr}
        activity={this.state.activity}
        goal={this.state.goal}
        onChange={this.onChange}
        handleSetGoal={(goal) => this.handleSetGoal(goal)}
        handleCompleteSignup={this.handleCompleteSignup}
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

const ConnectedSignupGoal = connect(mapStateToProps, mapDispatchToProps)(SignupGoalContainer)

export { ConnectedSignupGoal as SignupGoal }