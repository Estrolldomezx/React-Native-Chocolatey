import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'



export default function Forecast(props) {

    let x = "";
    if (props.name == "Hat Yai") {
        x = require("../img/hy.jpg");
    }
    if (props.name == "Trang") {
        x = require("../img/trung.jpg");
    }
    if (props.name == "Chaingmai") {
        x = require("../img/cgm.jpg");
    }
    if (props.name == "Khonkaen'") {
        x = require("../img/kk.jpg");
    }
    if (props.name == "Khonkaen'") {
        x = require("../img/kk.jpg");
    }

    return (
        <ImageBackground source={x} style={styles.backdrop}>
        <View>
            {/* <Text>{props.main}</Text> */}
            <Text style = {[styles.fontSize2, styles.white, styles.textAlign]}>{props.name}</Text>
            <Text style = {[styles.fontSize2, styles.white, styles.textAlign]}>{props.description}</Text>
            <Text style = {[styles.fontSize, styles.white, styles.textAlign]}>{props.temp} °C</Text>
            
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop:{
        width: '100%',
        height: '100%',
    },

    white:{
        color: 'white'
    },
    fontSize:{
        fontWeight: 'bold',
        fontSize: 35
    },
    fontSize2:{
        fontSize: 20
    },
    textAlign:{
        textAlign: 'center',
        textAlignVertical: 'auto'
    }


});
   