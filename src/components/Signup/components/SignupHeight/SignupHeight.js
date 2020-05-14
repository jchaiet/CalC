import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CButton } from '../../../shared'

import { styles } from '../../Signup.style';
import { colors, fonts } from '../../../../styles/styles'

const SignupHeight = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 0} 
    >
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>
        
        <View>
          <Text style={styles.headerText}>What is your current height?</Text>
        </View>
        
        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.bioContain}>
            <TextInput 
              style={(props.focusedInput === 'height_feet') ? styles.bioInputFocused : styles.bioInput}
              onChangeText={(val) => props.onChange('feet', val)}
                placeholder="Feet"
              placeholderTextColor="#808080"
              keyboardType="number-pad"
              autoFocus={true}
              onFocus={() => props.onFocusChange('height_feet')}
              onBlur={() => props.onBlurChange('height_feet')}
              returnKeyType="next"
              onSubmitEditing={() => inchesRef.focus()}
            />
            <Text style={styles.bioText}>Feet</Text>
          </View>
          
          <View style={styles.bioContain}>
            <TextInput 
              style={(props.focusedInput === 'height_inches') ? styles.bioInputFocused : styles.bioInput}
              onChangeText={(val) => props.onChange('inches', val)}
              placeholder="Inches"
              placeholderTextColor="#808080"
              keyboardType="number-pad"
              onFocus={() => props.onFocusChange('height_inches')}
              onBlur={() => props.onBlurChange('height_inches')}
              ref={ref => inchesRef = ref}
              returnKeyType="done"
              onSubmitEditing={props.handleSetHeight}
            />
            <Text style={styles.bioText}>Inches</Text>
          </View>
        </View>

      </View>

      <View>
        <CButton
          text="Next: Weight"
          action={props.handleSetHeight}
          color={colors.blue}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupHeight;