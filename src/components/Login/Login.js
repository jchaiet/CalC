import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, Platform, Button, Keyboard } from 'react-native';
import { Spinner } from 'native-base'

import { CButton } from '../shared'

import { styles } from './Login.style';
import { colors, fonts } from '../../styles/styles'

const Login = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.logoContainer}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGO</Text>
          </View>

          <View style={styles.errorContain}>
            { props.loginError && 
              <Text style={styles.errorText}>{props.loginError}</Text>
            }
          </View>

          <TextInput 
            style={(props.focusedInput === 'email') ? styles.inputBoxFocused : styles.inputBox}
            onChangeText={(val) => props.onChange('email', val)}
            placeholder="Email"
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
            textContentType='emailAddress'
            onFocus={() => props.onFocusChange('email')}
            onBlur={() => props.onBlurChange('email')}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.focus()}
          />
          <TextInput
            style={(props.focusedInput === 'password') ? styles.inputBoxFocused : styles.inputBox}
            secureTextEntry={true}
            onChangeText={(val) => props.onChange('password', val)}
            placeholder="Password"
            onFocus={() => props.onFocusChange('password')}
            onBlur={() => props.onBlurChange('password')}
            ref={ref => passwordRef = ref}
            returnKeyType="done"
            defaultValue=""
            onSubmitEditing={props.handleLogin}
          />
        </View>

        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >
          { props.loggingIn ? 
            <Spinner style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end'}} />
          :
            <View style={{ alignItems: 'center' }}>
              <CButton
                text="Login"
                action={props.handleLogin}
                color={colors.blue}
              />

              <TouchableOpacity style={styles.buttonLogin} onPress={props.handleNavToForgotPasswrod}>
                <Text style={styles.buttonLoginText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          }         
        </View>
      </View> 
    </KeyboardAvoidingView>
  )
}

export default Login;