import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17A589',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
});

export default App;