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
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
   }
   const styles = StyleSheet.create({
    backdrop: {
        //alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
   });
   