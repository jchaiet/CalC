import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, Platform, Button } from 'react-native';
import { Spinner } from 'native-base'

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Welcome to CalC</Text>
        <Text style={styles.bodyText}>Start setting your diet goals</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.handleNavToSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin} onPress={props.handleNavToLogin}>
        <Text style={styles.buttonLoginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10
  },
  bodyText: {
    fontSize: 14
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
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
  buttonLoginText: {
    fontSize: 20,
    color: '#4BB2E0',
    marginBottom: 25
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

export default Welcome;