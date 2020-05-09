import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from '../../Signup.style';

const SignupBiometrics = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>
          
          <View>
            <Text style={styles.headerText}>Tell us a bit more about you</Text>
          </View>
          
          <View style={styles.errorContain}>
            { props.signupError && 
              <Text style={styles.errorText}>{props.signupError}</Text>
            }
          </View>

          <View>
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.subHeaderText}>Height</Text>
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
                returnKeyType="next"
                onSubmitEditing={() => weightRef.focus()}
              />
              <Text style={styles.bioText}>Inches</Text>
            </View>
            </View>

            <Text style={styles.subHeaderText}>Weight</Text>
            <View style={styles.bioContain}>
              <TextInput 
                style={(props.focusedInput === 'weight') ? styles.bioInputFocused : styles.bioInput}
                onChangeText={(val) => props.onChange('weight', val)}
                placeholder="Weight"
                placeholderTextColor="#808080"
                keyboardType="number-pad"
                onFocus={() => props.onFocusChange('weight')}
                onBlur={() => props.onBlurChange('weight')}
                ref={ref => weightRef = ref}
                returnKeyType="done"
                onSubmitEditing={props.handleSetBiometrics}
              />
              <Text style={styles.bioText}>Pounds</Text>
            </View>
          </View>

        </View>

        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >
          <TouchableOpacity style={styles.button} onPress={props.handleSetBiometrics}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupBiometrics;