import React from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Picker } from 'react-native';

import { styles } from '../../Signup.style';

const SignupGender = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
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
              style={{ width: 325 }}
            >
              <Picker.Item label="Please select one" value="" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
            </Picker>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={props.handleSetGender}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupGender;