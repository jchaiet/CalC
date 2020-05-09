import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView,  Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from './Signup.style';

const SignupStart = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

          <View>
            <Text style={styles.headerText}>What's your email address?</Text>
          </View>

          <View style={styles.errorContain}>
            { props.signupError && 
              <Text style={styles.errorText}>{props.signupError}</Text>
            }
          </View>

          <TextInput 
            ref={ref => input = ref}
            style={(props.isFocused) ? styles.inputBoxFocused : styles.inputBox}
            onChangeText={(val) => props.onChange('email', val)}
            placeholder="Email"
            placeholderTextColor="#808080"
            autoCapitalize='none'
            autoFocus={true}
            onFocus={props.onFocusChange}
            onBlur={props.onBlurChange}
            onSubmitEditing={props.handleSetEmail}
            returnKeyType="go"
            defaultValue={props.email}
          />
        </View>

        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >
          <TouchableOpacity style={styles.button} onPress={props.handleSetEmail}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupStart;