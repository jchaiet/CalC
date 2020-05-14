import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView,  Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CButton } from '../shared'

import { styles } from './Signup.style';
import { colors, fonts } from '../../styles/styles'

const SignupStart = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

        <View>
          <Text style={styles.headerText}>What's your email address?</Text>
        </View>

        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        < View style={{ flex: 1, justifyContent: 'center' }}>
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
      </View>

      <View>
        <CButton
          text="Next: Password"
          action={props.handleSetEmail}
          color={colors.blue}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupStart;