import React from "react";
import { StyleSheet,Text, View } from 'react-native';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop:36,
        height:90,
        backgroundColor: '#f7287b',
        alignItems:'center'
    },
    headerTitle: {
        color:'black',
        fontSize: 18
    }

});

export default Header;

