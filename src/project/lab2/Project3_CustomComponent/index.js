import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: '#ff637c',
          alignSelf: 'center',
          padding: 10,
          margin: 10,
          ...props.button,
        }}>
        <Text style={{color: '#fff'}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        text="Say hello"
        onPress={() => alert('Hello there!')}
      />
      <Button
        text="Say goodbye"
        onPress={() => alert('Bye bye!')}
        buttonStyle={{backgroundColor: '#4dc2c2'}}
      />
    </View>
  );
};

export default App;
