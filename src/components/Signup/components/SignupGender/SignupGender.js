import React from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Picker } from 'react-native';

import { CButton } from '../../../shared'

import { styles } from '../../Signup.style';
import { colors, fonts } from '../../../../styles/styles'

const SignupGender = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

        <View>
          <Text style={styles.headerText}>What's your gender?</Text>
        </View>

        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Picker
            selectedValue={props.gender}
            value={props.gender}
            onValueChange={val => props.onChange('gender', val)}
            style={styles.picker}
            itemStyle={styles.pickerText}
          >
            <Picker.Item label="Please select one" value="" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>
      </View>

      <View>
        <CButton
          text="Next: Birthday"
          action={props.handleSetGender}
          color={colors.blue}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupGender;