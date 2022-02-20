import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center',
        padding:10
    }
});

export default StartGameScreen;