import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';

import { CButton } from '../../components/shared'

import { colors, fonts, layout } from '../../styles/styles'

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  const { login } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={layout.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
     <View style={layout.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.logoContainer}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGO</Text>
          </View>

          {/*<View style={styles.errorContain}>
            { props.loginError && 
              <Text style={styles.errorText}>{props.loginError}</Text>
            }
          </View>*/}

          <TextInput 
            style={(focusedInput === 'email') ? styles.inputBoxFocused : styles.inputBox}
            onChangeText={userEmail => setEmail(userEmail)}
            placeholder="Email"
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
            textContentType='emailAddress'
            onFocus={() => setFocusedInput('email')}
            //onBlur={() => this.onBlurChange('email')}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.focus()}
          />
          <TextInput
            style={(focusedInput === 'password') ? styles.inputBoxFocused : styles.inputBox}
            secureTextEntry={true}
            onChangeText={userPassword =>setPassword(userPassword)}
            placeholder="Password"
            onFocus={() => setFocusedInput('password')}
            //onBlur={() => setFocusedInput('password')}
            ref={ref => passwordRef = ref}
            returnKeyType="done"
            defaultValue=""
            onSubmitEditing={() => login(email, password)}
          />
        </View>

        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >

          <View style={{ alignItems: 'center' }}>
            <CButton
              text="Login"
              action={() => login(email, password)}
              color={colors.blue}
            />

            <TouchableOpacity style={styles.buttonLogin} >
              <Text style={styles.buttonLoginText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>



          {/* props.loggingIn ? 
            <Spinner style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end'}} color={colors.blue}/>
          :
            <View style={{ alignItems: 'center' }}>
              <CButton
                text="Login"
                action={() => login(email, password)}
                color={colors.blue}
              />

              <TouchableOpacity style={styles.buttonLogin} >
                <Text style={styles.buttonLoginText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          */}         
        </View>
      </View> 
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginVertical: 15
  },
  errorContain: {
    paddingVertical: 10,
  },
  errorText: {
    fontSize: 20,
    color: colors.red
  },  
  headerContain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: 370
  },
  headerText: {
    fontSize: 21,
    fontFamily: fonts.barlowMed
  }, 
  inputBox: {
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.lightGrey,
    textAlign: 'left',
    fontFamily: fonts.barlowLight,
  },
  inputBoxFocused: {
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
    textAlign: 'left',
    fontFamily: fonts.barlowLight
  },
  placeholder: {
    color: colors.darkGrey
  },
  buttonContain: { 
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center' 
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 5,
    width: 325
  },
  buttonComplete: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.green,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
    width: 325
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.barlowMed,
  },
  buttonLogin: {
    marginTop: 15,
  },  
  buttonLoginText: {
    fontSize: 20,
    color: colors.blue,
    fontFamily: fonts.barlowMed
  },
});