import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CButton } from '../shared'

import { colors, fonts, text, layout } from '../../styles/styles'

const Home = (props) => {
  return (
    <View style={layout.container}>

      <View style={styles.topContainer}>
        <View style={styles.goalDataContain}>
          <Text style={text.textH3}>Target</Text>  

          <View style={styles.trackingContain}> 
            <View style={styles.trackingCell}>
              <Text style={styles.trackingText}>
                {
                  Math.round(props.user.bmr * props.user.activity).toLocaleString()
                }
              </Text>
              <Text style={styles.trackingSubText}>Daily</Text>
            </View>

            <View style={styles.trackingCell}>
              <Text style={styles.trackingText}>
                {
                  Math.round((props.user.bmr * props.user.activity) * 7).toLocaleString()
                }
              </Text>
              <Text style={styles.trackingSubText}>Weekly</Text>
            </View>

            <View style={styles.trackingCell}>
              <Text style={styles.trackingText}>
                {
                  Math.round((props.user.bmr * props.user.activity) * props.daysInMonth).toLocaleString()
                }
              </Text>
              <Text style={styles.trackingSubText}>Monthly</Text>
            </View>
          </View>
          
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <CButton
              text="Add New Date"
              action={props.handleNavToAddNewDate}
              color={colors.blue}
            />
          </View>
        </View>
      </View>
      
      <Text>This is Home, {props.user.first_name}</Text>
      <Text>Your BMR is {props.user.bmr} </Text>
      <Button 
        title="Log out" 
        onPress={props.logout}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20
  },
  goalDataContain: {
    flex: 1,
    justifyContent: 'flex-start'
  }, 
  trackingContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  trackingText: {
    fontFamily: fonts.barlowSemi,
    fontSize: 24,
  },
  trackingSubText: {
    fontFamily: fonts.barlowReg,
    fontSize: 18,
    color: colors.darkGrey
  }
});

export default Home;