import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name ?</Text>
      <TextInput
        style={styles.input}
        placeholder="What can I call you?"
        placeholderTextColor="rgba(0,0,0,0.5)"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button
        title="Say hi"
        onPress={() => {
          alert(`Hello ${name} !`);
          setName('');
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
  input: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    borderRadius: 5,
  },
});