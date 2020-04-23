import React from 'react';
import Signup from './Signup';

class SignupContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '' 
    }
  }

  render(){
    return(
      <Signup />
    )
  }
}

export default SignupContainer;