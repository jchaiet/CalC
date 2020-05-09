import React from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Picker } from '@react-native-community/picker';

import { styles } from '../../Signup.style';

const SignupActivity = (props) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0} 
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>

          <View>
            <Text style={styles.headerText}>How active are you?</Text>
          </View>

          <View style={styles.errorContain}>
            { props.signupError && 
              <Text style={styles.errorText}>{props.signupError}</Text>
            }
          </View>
          
          <Picker
            selectedValue={props.activity}
            value={props.activity}
            onValueChange={val => props.onChange('activity', val)}
            style={{ width: 325 }}
          >
            <Picker.Item label="Not active at all" value={1.2} />
            <Picker.Item label="Light (1-3 days per week)" value={1.375} />
            <Picker.Item label="Moderate (3-5 days per week)" value={1.55} />
            <Picker.Item label="Very (6-7 days per week)" value={1.725} />
            <Picker.Item label="Extremely (2 x 6-7 days per week)" value={1.9} />

          </Picker>

        </View>

        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center' }} >
          <TouchableOpacity style={styles.button} onPress={props.handleSetActivity}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignupActivity;