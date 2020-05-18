import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CButton } from '../../../shared'

import { styles } from '../../SignUp.style';
import { colors, fonts, text, layout } from '../../../../styles/styles'

const SignUpName = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={layout.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

        <View>
          <Text style={text.headerText}>What's your name?</Text>
        </View>

        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
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

      <View>    
        <CButton
          text="Next: Gender"
          action={props.handleSetName}
          color={colors.blue}
        />      
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpName;