import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Home, {props.email}</Text>
      <Button 
        title="Log out" 
        onPress={props.logout}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;