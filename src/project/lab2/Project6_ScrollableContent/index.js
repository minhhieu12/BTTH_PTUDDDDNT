import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Square = ({title, bgColor = '#7ce0f9'}) => {
  return (
    <View style={[styles.box, {backgroundColor: bgColor}]}>
      <Text>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((index, item) => (
        <Square title={`Square ${index + 1}`} key={item} />
      ))}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  box: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});