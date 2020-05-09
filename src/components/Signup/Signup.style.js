import React from 'react';
import { StyleSheet } from 'react-native';

const pickerStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    borderRadius: 5,
    color: '#000',
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
    color: '#454545'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  },
  errorContain: {
    paddingVertical: 10,
  },
  errorText: {
    fontSize: 20,
    color: '#E04B4B'
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
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 18,
    color: '#454545',
    textAlign: 'center'
  },
  heightContain: {
    marginTop: 25,
    marginBottom: 50
  },  
  subHeaderText: {
    color: '#E04B4B',
    letterSpacing: 1,
    fontWeight: 'bold',
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
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    textAlign: 'left',
    marginRight: 10
  },
  bioInputFocused: {
    width: 275,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#fff',
    textAlign: 'left',
    marginRight: 10
  },
  bioText: {
    fontSize: 16,
    color: '#454545',
  },  
  inputBox: {
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    textAlign: 'left'
  },
  inputBoxFocused: {
    width: 325,
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ebebeb',
    backgroundColor: '#fff',
    textAlign: 'left'
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
    color: '#454545'
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#4BB2E0',
    borderColor: '#4BB2E0',
    borderWidth: 1,
    borderRadius: 5,
    width: 325
  },
  buttonComplete: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#4BE051',
    borderColor: '#4BE051',
    borderWidth: 1,
    borderRadius: 5,
    width: 325
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  buttonSignup: {
    fontSize: 12
  },
  selectedGoalHeading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  selectedGoalText: {
    color: '#fff',
    fontSize: 24,
    paddingVertical: 5
  },
  selectedGoalSubtext: {
    color: '#fff',
    fontSize: 16
  },
  selectedGoal: {
    backgroundColor: '#4BB2E0',
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
    fontWeight: 'bold',
    marginBottom: 5
  },
  unselectedGoalText: {
    fontSize: 24,
    paddingVertical: 5
  },
  unselectedGoalSubtext: {
    fontSize: 16
  },
  unselectedGoal: {
    backgroundColor: '#EBEBEB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 20,
    width: 325,
    marginVertical: 15,
    borderRadius: 3
  }
});

export { styles, pickerStyles };