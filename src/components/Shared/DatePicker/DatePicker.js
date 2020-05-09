import React from 'react';
import { View, TouchableOpacity, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    }
  }

  onChange = (date) => {
    this.setState({
      date
    }, () => {
      this.props.onChange(date)
    })
  }

  handleClose = () => {
    this.props.handleClose()
  }

  render() {
    const { date } = this.state; 

    return (
      <View onPress={this.handleClose} style={styles.datePickerContainer}>
        { Platform.OS === 'ios' && 
          <View style={styles.header}>
            <TouchableOpacity onPress={this.handleClose}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        }

        <DateTimePicker 
          value={new Date(date)}
          display="default"
          onChange={(e, date) => {
            if(Platform.OS === 'ios') {
              this.onChange(date)
            } else {
              this.handleClose(date)
            }
          }}
          style={{ backgroundColor: 'white' }}
        />
      </View>
    )
  }
}

const styles = {
  datePickerContainer: {
    backgroundColor: `${Platform.OS === 'ios' ? '#000066' : 'transparent'}`,
    position: 'absolute',
    justifyContent: 'flex-end',
    width: '100%'
  },
  header: {
    width: '100%',
    padding: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
}