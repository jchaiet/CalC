import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';
import Firebase, { db } from '../../../config/Firebase'

import Home from './Home';
import * as homeActions from './actions'

class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.homeActions.getUser(user.uid)
        
        this.setState({
          goal: this.props.goal,
          bmr: this.props.bmr,
          daysInMonth: this.calculateDays()
        })
      }
    })
  }

  calculateDays(){
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return new Date(year, month, 0).getDate()
  }
  
  logout = () => {
    this.props.homeActions.logout(this.props.navigation)
    //logoutUser(this.props.navigation)
  }

  handleNavToAddNewDate = () => {
    this.props.navigation.navigate('AddDate')

  }

  render(){
    return(
      <Home 
        {...this.props}
        daysInMonth={this.state.daysInMonth}
        logout={this.logout}
        handleNavToAddNewDate={this.handleNavToAddNewDate}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.Home
}

const mapDispatchToProps = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHome as Home }