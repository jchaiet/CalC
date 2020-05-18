import React, { useContext, useState, useEffect } from 'react';
import { Spinner } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import Firebase, { db } from '../../config/Firebase';

import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

import { AuthContext } from './AuthProvider';

export default Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(true)

  //Handle user state changes
  onAuthStateChanged = () => {
    setUser(user);
    if(initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(loading){
    return <Spinner />
  }

  return (
    <NavigationContainer>
      { user ? <AppTabs /> : <AuthStack /> }
    </NavigationContainer>
  )
}