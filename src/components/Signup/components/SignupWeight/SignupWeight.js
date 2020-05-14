import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CButton } from '../../../shared'

import { styles } from '../../Signup.style';
import { colors, fonts } from '../../../../styles/styles'

const SignupWeight = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>
        
        <View>
          <Text style={styles.headerText}>What is your current weight?</Text>
        </View>
        
        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.bioContain}>
            <TextInput 
              style={(props.focusedInput === 'weight') ? styles.bioInputFocused : styles.bioInput}
              onChangeText={(val) => props.onChange('weight', val)}
              placeholder="Weight"
              placeholderTextColor="#808080"
              keyboardType="number-pad"
              onFocus={() => props.onFocusChange('weight')}
              onBlur={() => props.onBlurChange('weight')}
              returnKeyType="done"
              onSubmitEditing={props.handleSetWeight}
            />
            <Text style={styles.bioText}>Pounds</Text>
          </View>
        </View>

      </View>

      <View>
        <CButton
          text="Next: Activity"
          action={props.handleSetWeight}
          color={colors.blue}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupWeight;