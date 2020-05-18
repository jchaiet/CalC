import React from 'react';
import { StyleSheet } from 'react-native';

import { layout, colors, fonts } from '../../styles/styles'

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

export { styles };