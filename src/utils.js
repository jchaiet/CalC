import * as Keychain from 'react-native-keychain'
import { NavigationActions, StackActions } from 'react-navigation'

export const isSignedIn = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if(credentials){
      return true
    }else{
      return false
    }
  }catch(err){
    return false
  }
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