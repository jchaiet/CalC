import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';

import * as signupActions from '../../actions'
import SignUpBirthday from './SignUpBirthday';

class SignUpBirthdayContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      birthday_month: '',
      birthday_day: '',
      birthday_year: '',
      birthday: '',
      focusedInput: null,
      showDatePicker: false
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

  handleSetBirthday = () => {
    const birthdayMonthFromState = this.state.birthday_month;
    const birthdayDayFromState = this.state.birthday_day;
    const birthdayYearFromState = this.state.birthday_year;

    const birthdayString = birthdayMonthFromState + '/' + birthdayDayFromState +'/' + birthdayYearFromState;

    let birthdayISO = new Date(birthdayString).toISOString()

    this.props.signupActions.setBirthday(birthdayISO, this.props.navigation) 
  }

  render(){
    return(
      <SignUpBirthday
        {...this.props}
        birthday_month={this.state.birthday_month}
        birthday_day={this.state.birthday_day}
        birthday_year={this.state.birthday_year}
        focusedInput={this.state.focusedInput}
        onChange={this.onChange}
        onFocusChange={(input) => this.onFocusChange(input)}
        onBlurChange={(input) => this.onBlurChange(input)}
        handleSetBirthday={this.handleSetBirthday}
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

const ConnectedSignUpBirthday = connect(mapStateToProps, mapDispatchToProps)(SignUpBirthdayContainer)

export { ConnectedSignUpBirthday as SignUpBirthday }