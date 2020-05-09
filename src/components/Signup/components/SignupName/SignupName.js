import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from '../../Signup.style';

const SignupName = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

          <View>
            <Text style={styles.headerText}>What's your name?</Text>
          </View>

          <View style={styles.errorContain}>
            { props.signupError && 
              <Text style={styles.errorText}>{props.signupError}</Text>
            }
          </View>

          <View>
            <TextInput 
              style={(props.focusedInput === 'first') ? styles.inputBoxFocused : styles.inputBox}
              onChangeText={(val) => props.onChange('first_name', val)}
              placeholder="First Name"
              placeholderTextColor="#808080"
              autoFocus={true}
              onFocus={() => props.onFocusChange('first')}
              onBlur={() => props.onBlurChange('first')}
              returnKeyType="next"
              onSubmitEditing={() => lastRef.focus()}
              defaultValue={props.first_name}
            />

            <TextInput 
              style={(props.focusedInput === 'last') ? styles.inputBoxFocused : styles.inputBox}
              onChangeText={(val) => props.onChange('last_name', val)}
              placeholder="Last Name"
              placeholderTextColor="#808080"
              onFocus={() => props.onFocusChange('last')}
              onBlur={() => props.onBlurChange('last')}
              returnKeyType="done"
              ref={ref => lastRef = ref}
              onSubmitEditing={props.handleSetName}
              defaultValue={props.last_name}
            />
          </View>  
        </View>

        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >       
          <TouchableOpacity style={styles.button} onPress={props.handleSetName}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupName;