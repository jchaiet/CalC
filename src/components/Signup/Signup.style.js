import React from 'react';
import { StyleSheet } from 'react-native';

import { layout, colors, fonts } from '../../styles/styles'

const pickerStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    color: colors.black,
    paddingRight: 30,
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 18,
  },
  iconContainer: {
    top: 22,
    right: 15
  },
  placeholder: {
    color: colors.lightGrey
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContain: {
    paddingVertical: 10,
  },
  errorText: {
    fontSize: 20,
    color: colors.red,
    fontFamily: fonts.barlowLight
  },  
  headerContain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: 370
  },
  subText: {
    fontSize: 18,
    color: colors.darkGrey,
    textAlign: 'center',
    fontFamily: fonts.barlowLight
  },
  heightContain: {
    marginTop: 25,
    marginBottom: 50
  },  
  subHeaderText: {
    color: colors.darkGrey,
    letterSpacing: 1,
    fontFamily: fonts.barlowMed,
    fontSize: 20,
    paddingRight: 10,
    marginBottom: 5
  },
  bioContain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bioInput: {
    width: 275,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.lightGrey,
    textAlign: 'left',
    marginRight: 10
  },
  bioInputFocused: {
    width: 275,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: '#fff',
    textAlign: 'left',
    marginRight: 10
  },
  bioText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: fonts.barlowLight
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
    fontFamily: fonts.barlowLight
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
  dateInputBoxMD: {
    width: 35,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  dateInputBoxY: {
    width: 60,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  dateInputContain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  }, 
  dateSeparator: {
    marginHorizontal: 10,
    fontSize: 18
  }, 
  placeholder: {
    color: colors.darkGrey
  },
  buttonContain: { 
    flex: 1, 
    justifyContent:'flex-end', 
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
    width: 325,
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
    fontFamily: fonts.barlowMed
  },
  buttonSignUp: {
    fontSize: 12
  },
  selectedGoalHeading: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.barlowMed,
  },
  selectedGoalText: {
    color: '#fff',
    fontSize: 30,
    paddingVertical: 10,
    fontFamily: fonts.barlowBold
  },
  selectedGoalSubtext: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.barlowLight
  },
  selectedGoal: {
    backgroundColor: colors.red,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 20,
    width: 325,
    marginVertical: 15,
    borderRadius: 3
  },
  unselectedGoalHeading: {
    fontSize: 24,
    fontFamily: fonts.barlowMed,
  },
  unselectedGoalText: {
    fontSize: 30,
    fontFamily: fonts.barlowBold,
    paddingVertical: 10,
  },
  unselectedGoalSubtext: {
    fontSize: 16,
    fontFamily: fonts.barlowLight,
  },
  unselectedGoal: {
    backgroundColor: colors.lightGrey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 20,
    width: 325,
    marginVertical: 15,
    borderRadius: 3
  },
  picker: {
    width: 325
  },
  pickerText: {
    fontFamily: fonts.barlowReg,
  }
});

export { styles, pickerStyles };