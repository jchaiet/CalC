import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from '../../Signup.style';


const SignupPassword = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>
          
          <View>            
            <Text style={styles.headerText}>Set up you CalC password</Text>
          </View>

          <View style={styles.errorContain}>
            { props.signupError && 
              <Text style={styles.errorText}>{props.signupError}</Text>
            }
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput 
              style={(props.focusedInput === 'password') ? styles.inputBoxFocused : styles.inputBox}
              onChangeText={(val) => props.onChange('password', val)}
              placeholder="Password"
              placeholderTextColor="#808080"
              secureTextEntry={true}
              autoFocus={true}
              onFocus={() => props.onFocusChange('password')}
              onBlur={() => props.onBlurChange('password')}
              ref={ref => passwordRef = ref}
              returnKeyType="next"
              onSubmitEditing={() => confirmRef.focus()}
              defaultValue=""
            />
            <TextInput 
              style={(props.focusedInput === 'confirm') ? styles.inputBoxFocused : styles.inputBox}
              onChangeText={(val) => props.onChange('confirm_password', val)}
              placeholder="Confirm Password"
              placeholderTextColor="#808080"
              secureTextEntry={true}
              onFocus={() => props.onFocusChange('confirm')}
              onBlur={() => props.onBlurChange('confirm')}
              ref={ref => confirmRef = ref}
              returnKeyType="done"
              onSubmitEditing={props.handleSetPassword}
              defaultValue=""
            />
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={props.handleSetPassword}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupPassword;