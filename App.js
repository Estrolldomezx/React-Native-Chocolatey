import React from 'react';
import { NavigationContainer, StackActions  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';


const Stack = createStackNavigator()

export default function App() {

  return (

    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
       <Stack.Screen name = "Home" component = {ZipCodeScreen} options={{
          title: 'Home',
          headerStyle: {
            color: 'white',
            backgroundColor: '#7B68EE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name = "Weather" component = {WeatherScreen} options={{
          title: 'Weather',
          headerStyle: {
            color: 'white',
            backgroundColor: '#8B4513',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


