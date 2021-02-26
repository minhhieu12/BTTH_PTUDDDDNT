import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Square = ({title, bgColor = '#7ce0f9'}) => {
  return (
    <View style={[styles.box, {backgroundColor: bgColor}]}>
      <Text>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Square title="Square 1" />
      <Square title="Square 2" bgColor="#4dc2c2" />
      <Square title="Square 3" bgColor="#ff637c" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  box: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});