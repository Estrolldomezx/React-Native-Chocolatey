import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'



export default function Forecast(props) {

    let x = "";
    let nameProvince =""; 
    if (props.name == "Hat Yai") {
        x = require("../img/hy.jpg");
        nameProvince = "Hat Yai";
    }
    if (props.name == "Trang") {
        x = require("../img/trung.jpg");
        nameProvince = "Trang";
    }
    if (props.name == "Chiang Mai") {
        x = require("../img/cgm.jpg");
        nameProvince = "Chian gmai";
    }
    if (props.name == "Khon Kaen") {
        x = require("../img/kk.jpg");
        nameProvince = "Khon kaen";
    }
    if (props.name == "Chaophraya Surasak") { //
        x = require("../img/chon.jpg");
        nameProvince = "Chonburi";
    }

    return (
        <View>
            <View >
                <Text style = {[styles.fontSize2, styles.white, styles.textAlign]}>{nameProvince}</Text>
                <Text style = {[styles.fontSize2, styles.white, styles.textAlign]}>{props.description}</Text>
                <Text style = {[styles.fontSize, styles.white, styles.textAlign]}>{props.temp} °C</Text>
                <Text style = {[styles.fontSize, styles.white, styles.textAlign]}></Text>
            </View>
            <Image source={x} style = {styles.backdrop}/>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop:{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 360,
        height: 200,
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
        //paddingTop: 50,
        textAlign: 'center',
        textAlignVertical: 'auto'
    },
    textAlign2:{

        paddingTop: 50,
        textAlign: 'center',
        textAlignVertical: 'auto'
    }


});
   