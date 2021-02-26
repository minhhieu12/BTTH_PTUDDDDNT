import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>You've pressed the button : {pressCount} time(s) </Text>
      <Button
        title={`Pressed ${pressCount} time(s)`}
        onPress={() => setPressCount(pressCount + 1)}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});