import React from 'react'
import { StyleSheet, View, Text } from 'react-native'



export default function Forecast(props) {
    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text style = {[styles.fontSize, styles.white, styles.textAlign]}>{props.temp} °C</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    white:{
        color: 'white'
    },
    fontSize:{
        fontWeight: 'bold',
        fontSize: 35
    },
    textAlign:{
        textAlign: 'center',
        textAlignVertical: 'auto'
    }


});
   