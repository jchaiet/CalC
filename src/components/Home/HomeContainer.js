import React from 'react';
import { connect } from 'react-redux'

import Home from './Home';
import { logoutUser } from '../../utils'

class HomeContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  logout = () => {
    logoutUser(this.props.navigation)
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
  return {}
}

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHome as Home }