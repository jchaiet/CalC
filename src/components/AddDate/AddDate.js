import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/Feather';
import { CButton } from '../shared'
import { colors, fonts, text, layout } from '../../styles/styles'

const AddDate = (props) => {
  return (
    <View style={layout.container}>
      <View style={{ flex: 1, justifyContent:'space-between', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={text.headerText}>Keep the streak going!</Text>

          <View style={{ paddingVertical: 20 }}>
            <Icon 
              name='trending-up'
              size={60}
              color={colors.red}
            />
          </View>

          <View style={{ alignItems: 'center', marginBottom: 25 }}>
            <Text style={{ fontFamily: fonts.barlowReg, fontSize: 21, color: colors.grey }}>Last Check-In</Text>
            <Text style={{ fontFamily: fonts.barlowBold, fontSize: 25 }}>[Last Check-In Date]</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: fonts.barlowReg, fontSize: 21, color: colors.grey }}>Streak</Text>
            <Text style={{ fontFamily: fonts.barlowBold, fontSize: 25, color: colors.blue }}>[Streak]</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end'}}>

        <DateTimePicker
          value={props.date}
          onChange={val => props.onChange('date', val)}
          mode="date"
          style={{ width: 325, fontFamily: fonts.barlowReg, marginBottom: 15 }}
        />

        <CButton
          text="Next: Add Items"
          action={props.handleSetDate}
          color={colors.red}
        />
      </View>
    </View>
  )
}

export default AddDate;