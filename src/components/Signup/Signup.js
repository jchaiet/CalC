import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, Platform, Button } from 'react-native';
import { Spinner } from 'native-base'

const Login = (props) => {
  return (
    <View style={styles.container}>
      { props.settingPassword ? 
        <Spinner />
      :
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
            <View style={styles.container}>
              <View>
                { props.settingPasswordError && 
                  <Text>{props.settingPasswordError}</Text>
                }
              </View>
              <View>
                <TextInput 
                  style={styles.inputBox}
                  onChangeText={(val) => props.onChange('first_name', val)}
                  placeholder="First Name"
                />
                <TextInput 
                  style={styles.inputBox}
                  onChangeText={(val) => props.onChange('last_name', val)}
                  placeholder="Last Name"
                />
                <TextInput 
                  style={styles.inputBox}
                  onChangeText={(val) => props.onChange('email', val)}
                  placeholder="Email"
                  autoCapitalize='none'
                />
                <TextInput
                  style={styles.inputBox}
                  secureTextEntry={true}
                  onChangeText={(val) => props.onChange('password', val)}
                  placeholder="Password"
                />
                <TextInput
                  style={styles.inputBox}
                  secureTextEntry={true}
                  onChangeText={(val) => props.onChange('confirm_password', val)}
                  placeholder="Confirm Password"
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={props.handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
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
  }
});

export default Login;