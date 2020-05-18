import React from 'react';
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

import AddDate from './AddDate';
import { Alert } from 'react-native';

//import * as homeActions from './actions'

class AddDateContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  onChange = (name, value) => {
		this.setState({ [name]: value });
  }

  handleSetDate = () => {
    const dateFromState = new Date((this.state.date).toDateString()).toISOString()
    Alert.alert(dateFromState)
  }

  render(){
    return(
      <AddDate 
        {...this.props}
        date={this.state.date}
        onChange={this.onChange}
        handleSetDate={(date) => this.handleSetDate(date)}
      />
    )
  }
}
/*
const mapStateToProps = state => {
  return state.App
}

const mapDispatchToProps = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHome as Home }*/

export default AddDateContainer;