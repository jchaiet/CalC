import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, Platform, Button } from 'react-native';

import { CButton } from '../shared'

import { colors, fonts } from '../../styles/styles'

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Welcome to CalC</Text>
        <Text style={styles.bodyText}>Start setting your diet goals</Text>
      </View>

      <CButton
        text="Sign up"
        action={props.handleNavToSignup}
        color={colors.blue}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={props.handleNavToLogin}>
        <Text style={styles.buttonLoginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    letterSpacing: 1,
    marginBottom: 5,
    fontFamily: fonts.barlowSemi
  },
  bodyText: {
    fontSize: 16,
    fontFamily: fonts.barlowReg
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 5,
    width: 325,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.barlowMed
  },
  buttonLogin: {
    marginTop: 15,
  },  
  buttonLoginText: {
    fontSize: 20,
    color: colors.blue,
    fontFamily: fonts.barlowMed
  },
  errorContain: {
    backgroundColor: colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    color: colors.white,
    fontSize: 18
  }
});

export default Welcome;