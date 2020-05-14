import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors, fonts } from '../../../styles/styles'

const CButton = (props) => {
  return (
    <TouchableOpacity style={styles(props).button} onPress={props.action}>
      <Text style={styles(props).buttonText}>{props.text}</Text>
    </TouchableOpacity>      
  )
}

const styles = (props) => StyleSheet.create({
  button: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: props.color,
    borderColor: props.color,
    borderWidth: 1,
    borderRadius: 5,
    width: 325,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.barlowSemi
  }
});

export default CButton;