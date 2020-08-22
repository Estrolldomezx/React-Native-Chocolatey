import React ,{ useState , useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({ //initial state
        main: '-', //blank
        description: '-', //blank
        temp: 0
        }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=0712dfd28ac4f1fe5420021ccf1a09f3`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    name: json.name,
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style = {styles.opacity}>
                    <Text style = {[styles.white, styles.fontSize2, styles.textAlign]}>Zip Code is {props.zipCode}</Text>
                    <Text style = {[styles.white, styles.fontSize, styles.textAlign]}>Main</Text>
                    {/* <Text style = {[styles.white, styles.fontSize2, styles.textAlign]}>description</Text> */}
                    <Forecast {...forecastInfo} />
                </View>
                <View style = {styles.opacity2}></View>
            </ImageBackground>
        </View>
    );
   }
const styles = StyleSheet.create({
    opacity:{
        flex: 2,
        opacity: 0.5,
        backgroundColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
 
    },
    opacity2:{
        flex: 3,
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

   