import * as Keychain from 'react-native-keychain'
import { NavigationActions, StackActions } from 'react-navigation'
import Firebase, { db } from '../config/Firebase'

export const isSignedIn = async () => {   
  try {
    Firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if(user){
        return true
      }else{
        return false
      }
    })
  } catch(err) {
    console.log(err)
    return false
  }
  
  /*try {
    const credentials = await Keychain.getGenericPassword();
    if(credentials){
      console.log('in')
      
      return true
    }else{
      console.log('out')
      return false
    }
  }catch(err){
    return false
  }*/
}

export const logoutUser = async (navigation) => {
  try {
    await Keychain.resetGenericPassword()
    navigation.navigate({ routeName: 'SignedOut'})
    return true
  } catch(err){
    alert(err)
    return false
  }
}