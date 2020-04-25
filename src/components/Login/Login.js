import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, Platform, Button } from 'react-native';
import { Spinner } from 'native-base'

const Login = (props) => {
  return (
    <View style={styles.container}>
      { props.loggingIn ? 
        <Spinner />
      :
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
            <View style={styles.container}>
              { props.loginError && 
                <View style={styles.errorContain}> 
                  <Text style={styles.errorText}>{props.loginError}</Text>
                </View>
              }
              <View>
                <TextInput 
                  style={styles.inputBox}
                  onChangeText={(val) => props.onChange('email', val)}
                  placeholder="Email"
                  autoCapitalize='none'
                  autoCompleteType='email'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                />
                <TextInput
                  style={styles.inputBox}
                  secureTextEntry={true}
                  onChangeText={(val) => props.onChange('password', val)}
                  placeholder="Password"
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={props.handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              
              <Button 
                title="Don't have an account? Sign up" 
                onPress={props.handleNavToSignup} 
              />
            </View> 
          </KeyboardAvoidingView>
        </View>
      }
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#dedede',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#4BB2E0',
    borderColor: '#4BB2E0',
    borderWidth: 1,
    borderRadius: 5,
    width: 325,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  buttonSignup: {
    fontSize: 12
  },
  errorContain: {
    backgroundColor: '#E04B4B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    color: '#fff',
    fontSize: 18
  }
});

export default Login;