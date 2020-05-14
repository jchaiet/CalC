import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CButton } from '../../../shared'

import { styles } from '../../Signup.style';
import { colors, fonts } from '../../../../styles/styles'

const SignupBirthday = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

        <View>
          <Text style={styles.headerText}>What is your date of birth?</Text>
        </View>

        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={(props.focusedInput === 'birthday') ? styles.inputBoxFocused : styles.inputBox} onPress={() => birthdayMonthRef.focus()}>
            
            <View style={styles.dateInputContain}>
              <TextInput 
                style={styles.dateInputBoxMD}
                value={props.birthday_month}
                onChangeText={(val) => {
                  props.onChange('birthday_month', val)
                  if(val.length == 2) {
                    birthdayDayRef.focus()
                  }
                }}
                autoFocus={true}
                onFocus={() => props.onFocusChange('birthday')}
                onBlur={() => props.onBlurChange('birthday')}
                placeholder="MM"
                maxLength={2}
                ref={ref => birthdayMonthRef = ref}
                returnKeyType="next"
                keyboardType="number-pad"
                onSubmitEditing={() => birthdayDayRef.focus()}
              />
              <Text style={styles.dateSeparator}>/</Text>
              <TextInput 
                style={styles.dateInputBoxMD}
                value={props.birthday_day}
                onChangeText={(val) => {
                  props.onChange('birthday_day', val)
                  if(val.length == 2) {
                    birthdayYearRef.focus()
                  }
                }}
                onSubmitEditing={props.handleSetAge}
                onFocus={() => props.onFocusChange('birthday')}
                onBlur={() => props.onBlurChange('birthday')}
                placeholder="DD"
                maxLength={2}
                ref={ref => birthdayDayRef = ref}
                returnKeyType="next"
                keyboardType="number-pad"
                onSubmitEditing={() => birthdayYearRef.focus()}
              />
              <Text style={styles.dateSeparator}>/</Text>
              <TextInput 
                style={styles.dateInputBoxY}
                value={props.birthday_year}
                onChangeText={(val) => props.onChange('birthday_year', val)}
                onFocus={() => props.onFocusChange('birthday')}
                onBlur={() => props.onBlurChange('birthday')}
                placeholder="YYYY"
                maxLength={4}
                ref={ref => birthdayYearRef = ref}
                returnKeyType="done"
                keyboardType="number-pad"
                onSubmitEditing={props.handleSetBirthday}
              />
            </View>
            
          </View>
        </View>
      </View>

      <View>
        <CButton
          text="Next: Height"
          action={props.handleSetBirthday}
          color={colors.blue}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupBirthday;