import React from 'react'
import { View , Text, StyleSheet, SafeAreaView, ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';

const availableZipItems = [
  { place: 'Hatyai'       , code: '90110', pic:require('../img/hy.jpg') },
  { place: 'Trang'        , code: '92000', pic:require('../img/trung2.jpg')},
  { place: 'Chiangmai'    , code: '50000', pic:require('../img/cgm.jpg')},
  { place: 'Khonkaen'     , code: '40000', pic:require('../img/kk.jpg')},
  { place: 'Chonburi'     , code: '20000', pic:require('../img/chon.jpg')}
 ]

const ZipItem = ({place, code, pic, navigation}) =>(
    <TouchableHighlight onPress ={() => {
        navigation.navigate('Weather' , {zipCode: code})
    }}>
      <View>
        <View style = {styles.zipCode}>
            <ImageBackground source={pic} style = {styles.imgs}/> 
            <Text style={styles.base}>{place}</Text>
            <Text style={styles.base2}>{code}</Text>
        </View> 
      </View>
      </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()

    return(
     <SafeAreaView style={{flex: 1, 
                          backgroundColor:'#000033',
                          paddingTop: 130, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={'stack'} layoutCardOffset={`18`}
                  data = {availableZipItems}
                  keyExtractor = {item => item.code}
                  renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}

                  scrollInterpolator={scrollInterpolator}
                  slideInterpolatedStyle={animatedStyles}

                  hasParallaxImages={true}
                  useScrollView={true}

                  sliderWidth={200}
                  itemWidth={310}
                  />
            </View>
          </SafeAreaView>
  
    )
}

const styles = StyleSheet.create({

    base: { 
        backgroundColor:'#7B68EE',
        height: 70,
        paddingTop: 15,
        paddingLeft: 25,
        marginLeft: 40,
        marginRight: 0, 
        color: 'white',
        fontSize: 40, 
        fontWeight: 'bold'
    },
    base2: { 
        backgroundColor:'#7B68EE',
        height: -30,
        paddingTop: -30,
        paddingLeft: 25,
        paddingBottom: 20,
        marginLeft: 40,
        marginRight: 0, 
        fontSize: 25, 
        color: 'white',
    },

    imgs:{
        paddingTop: 130,
        paddingLeft: 25,
        marginLeft: 40,
        marginRight: 0, 
        width:270,
        height:200,
    },

    background: {
        backgroundColor: '#FF6666',
        marginLeft: 20,
        marginRight: 20,
        margin: 3,
        borderRadius: 50,
    },

});