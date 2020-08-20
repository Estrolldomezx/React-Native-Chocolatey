import React ,{ useState } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Forecast from './Forecast';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({ //initial state
        main: '-', //blank
        description: '-', //blank
        temp: 0
        }) 
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style = {styles.opacity}>
                    <Text style = {[styles.white, styles.fontSize2, styles.textAlign]}>Zip Code is {props.zipCode}</Text>
                    <Text style = {[styles.white, styles.fontSize, styles.textAlign]}>Main</Text>
                    <Text style = {[styles.white, styles.fontSize2, styles.textAlign]}>description</Text>
                    <Forecast {...forecastInfo} />
                </View>
                <View style = {styles.opacity2}></View>
            </ImageBackground>
        </View>
    );
   }
const styles = StyleSheet.create({
    opacity:{
        flex:2,
        opacity: 0.5,
        backgroundColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
 
    },
    opacity2:{
        flex:3,
        opacity: 0,
        backgroundColor: 'white'
    },

    backdrop: {
        width: '100%',
        height: '100%',
    },
    white:{
        color: 'white'
    },
    fontSize:{
        fontWeight: 'bold',
        fontSize: 30
    },
    fontSize2:{
        fontSize: 20
    },
    textAlign:{
        textAlign: 'center',
        textAlignVertical: 'auto'
    }


});

   