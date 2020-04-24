import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from './Home';
import * as homeActions from './actions'

import { logoutUser } from '../../utils'

class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  logout = () => {
    this.props.homeActions.logout(this.props.navigation)
    //logoutUser(this.props.navigation)
  }

  render(){
    return(
      <Home 
        {...this.props}
        logout={this.logout}
      />
    )
  }
}

const mapStateToProps = state => {
  return state.App
}

const mapDispatchToProps = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHome as Home }