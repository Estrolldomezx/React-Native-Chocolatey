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
                <ImageBackground source={require('../img/1.jpg')} style={styles.backdrop2}>
                    <View >
                         <Text style = {[styles.white, styles.fontSize, styles.textAlign]}></Text> 
                         <Forecast {...forecastInfo} />
                    </View>
                </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    opacity:{
        flex: 2,
        opacity: 1,
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
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    backdrop2: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        opacity: 1,
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

   