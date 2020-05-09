import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, Platform, Button, Keyboard } from 'react-native';
import { Spinner } from 'native-base'
import { SafeAreaView } from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Login = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        
          <View>
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', marginTop: 20 }} >
              <View style={styles.logoContain}> 
                <Text style={styles.logoText}>LOGO</Text>
              </View>

                { props.loginError && 
                  <View style={styles.errorContain}> 
                    <Text style={styles.errorText}>{props.loginError}</Text>
                  </View>
                }

              <TextInput 
                style={styles.inputBox}
                onChangeText={(val) => props.onChange('email', val)}
                placeholder="Email"
                autoCapitalize='none'
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onSubmitEditing={() => passwordRef.focus()}
              />
              <TextInput
                style={styles.inputBox}
                secureTextEntry={true}
                onChangeText={(val) => props.onChange('password', val)}
                placeholder="Password"
                ref={ref => passwordRef = ref}
                onSubmitEditing={props.handleLogin}
              />
            </View>
            <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >
              { props.loggingIn ? 
                  <Spinner />
              :
                <View style={{ alignItems: 'center'  }}>
                  <TouchableOpacity style={styles.button} onPress={props.handleLogin}>
                    <Text style={styles.buttonText}>Log in</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonForgot} >
                    <Text style={styles.buttonForgotText}>Forgot your password?</Text>
                  </TouchableOpacity>
                </View>
              }
            </View> 
          </View>
          
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between'
  }, 
  logoContain: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  loadingContain: {
    paddingTop: 21,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderColor: '#dedede',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    paddingVertical: 10,
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
  buttonForgot: {
    fontSize: 12
  },
  buttonForgotText: {
    fontSize: 18,
    color: '#4BB2E0',
    marginBottom: 5
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