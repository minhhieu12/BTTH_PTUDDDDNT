import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default () => {
    return (
        <View style = {styles.container}>
            <Button title="Press Me" onPress = {() => alert("Hello there!")}/>
            <TouchableOpacity style={styles.button} onPress={() => alert("Hello world!")}>
                <Text style={styles.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center'
        },
        button:{
            backgroundColor: 'blue',
            marginTop: 10,
            alignItems: 'center',
            padding: 10
        },
        text:{
            color: 'white',
            fontSize: 18
        }
    }
);