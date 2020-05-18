import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';

import { CButton } from '../../components/shared'

import { colors, fonts, layout } from '../../styles/styles'

export default WelcomeScreen = ({ navigation }) => {
  return (
    <View style={layout.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Welcome to CalC</Text>
        <Text style={styles.bodyText}>Start setting your diet goals</Text>
      </View>

      <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >

      <CButton
        text="Sign up"
        action={() => navigation.navigate('SignUpStart')}
        color={colors.blue}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonLoginText}>Log in</Text>
      </TouchableOpacity>
      </View>
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