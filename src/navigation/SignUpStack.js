import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUpStart } from '../components/SignUp'
import { SignUpPassword } from '../components/SignUp/components/SignUpPassword'
import { SignUpName } from '../components/SignUp/components/SignUpName'
import { SignUpGender } from '../components/SignUp/components/SignUpGender'
import { SignUpBirthday } from '../components/SignUp/components/SignUpBirthday'
import { SignUpHeight } from '../components/SignUp/components/SignUpHeight'
import { SignUpWeight } from '../components/SignUp/components/SignUpWeight'
import { SignUpActivity } from '../components/SignUp/components/SignUpActivity'
import { SignUpGoal } from '../components/SignUp/components/SignUpGoal'

const Stack = createStackNavigator();

export default SignUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignUpStart"
        component={SignUpStart}
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack(null)}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='x'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
          }
        })}
      />
      <Stack.Screen 
        name="SignUpPassword" 
        component={SignUpPassword} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpName" 
        component={SignUpName} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpGender" 
        component={SignUpGender} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpBirthday" 
        component={SignUpBirthday}
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpHeight" 
        component={SignUpHeight}
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpWeight" 
        component={SignUpWeight} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpActivity" 
        component={SignUpActivity} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
      <Stack.Screen 
        name="SignUpGoal" 
        component={SignUpGoal} 
        options={({navigation}) => ({
          title: '',
          headerLeft: () =>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <View style={{paddingHorizontal:20}}>
                <Icon
                  active
                  name='chevron-left'
                  size={24}
                />
              </View>
            </TouchableOpacity>
          ,
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
            }
        })}
      />
    </Stack.Navigator>
  )
}