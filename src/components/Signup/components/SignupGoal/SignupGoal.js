import React from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CButton } from '../../../shared'

import { styles } from '../../Signup.style';
import { colors, fonts } from '../../../../styles/styles'

const SignupGoal = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', marginTop: 20 }}>

        <View>
          <Text style={styles.headerText}>What's your goal?</Text>
        </View>
        
        <View style={styles.errorContain}>
          { props.signupError && 
            <Text style={styles.errorText}>{props.signupError}</Text>
          }
        </View>

        { props && 
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
            style={props.goal === 'maintain' ? styles.selectedGoal : styles.unselectedGoal}
              onPress={() => props.handleSetGoal('maintain')}
            >
              <Text style={props.goal === 'maintain' ? styles.selectedGoalHeading : styles.unselectedGoalHeading}>Maintain weight</Text>
              <Text style={props.goal === 'maintain' ? styles.selectedGoalText : styles.unselectedGoalText}>
                {
                  Math.round(props.bmr * props.activity)
                }
              </Text>
              <Text style={props.goal === 'maintain' ? styles.selectedGoalSubtext : styles.unselectedGoalSubtext}>
                Calories per day
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={props.goal === 'lose' ? styles.selectedGoal : styles.unselectedGoal}
              onPress={() => props.handleSetGoal('lose')}
            >
              <Text style={props.goal === 'lose' ? styles.selectedGoalHeading : styles.unselectedGoalHeading}>Lose weight</Text>
              <Text style={props.goal === 'lose' ? styles.selectedGoalText : styles.unselectedGoalText}>
                {
                  Math.round((props.bmr * props.activity ) * .8)
                }
              </Text>
              <Text style={props.goal === 'lose' ? styles.selectedGoalSubtext : styles.unselectedGoalSubtext}>
                Calories per day
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>

      <View>
        <CButton
          text="Start Tracking"
          action={props.handleCompleteSignup}
          color={colors.green}
        />
      </View>
    </View>
  )
}

export default SignupGoal;