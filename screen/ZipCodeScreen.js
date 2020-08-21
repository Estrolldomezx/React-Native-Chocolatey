import React from 'react'
import { FlatList, View , Text, StyleSheet, SafeAreaView, setState, backgroundImage, Image, ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';


const availableZipItems = [
    { place: 'Hatyai'       , code: '90110'     ,pic: 'https://bebaspatani.com/wp-content/uploads/2015/08/%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5-%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%94%E0%B8%B1%E0%B8%99%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88-16-270815-1035.jpg'},
    { place: 'Trang'        , code: '92000'     ,pic: 'https://f.ptcdn.info/351/054/000/oykgo4p2gdjLFDp9WhR-o.jpg'},
    { place: 'Chiangmai'    , code: '50000'     ,pic: 'https://newtv.co.th/images/content/ct_20180912122512290.jpg'},
    { place: 'Khonkaen'     , code: '40000'     ,pic: 'https://scontent-fbkk5-7.us-fbcdn.net/v1/t.1-48/1426l78O9684I4108ZPH0J4S8_842023153_K1DlXQOI5DHP/dskvvc.qpjhg.xmwo/p/data/113/113565-7-9947.jpg'},
    { place: 'Chonburi'     , code: '20000'     ,pic: 'https://shopee.co.th/blog/wp-content/uploads/2019/07/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.jpg'}
   ]
   
const ZipItem = ({place, code, pic, navigation}) =>(
    <TouchableHighlight onPress ={() => {
        navigation.navigate('Weather' , {zipCode: code})
    }}>
      <View>
        <View>
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
        <SafeAreaView style={{flex: 1, backgroundColor:'#FF6666', paddingTop: 150, }}>
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
                  itemWidth={322}
                  />
            </View>
          </SafeAreaView>
 
    )
}



const styles = StyleSheet.create({
    base: { 
        backgroundColor:'floralwhite',
        height: 70,
        paddingTop: 15,
        paddingLeft: 25,
        marginLeft: 40,
        marginRight: 0, 
        fontSize: 40, 
        fontWeight: 'bold'
    },
    base2: { 
        backgroundColor:'floralwhite',
        height: -30,
        paddingTop: -30,
        paddingLeft: 25,
        paddingBottom: 20,
        marginLeft: 40,
        marginRight: 0, 
        fontSize: 25, 
    },

    imgs:{
        paddingTop: 130,
        paddingLeft: 25,
        marginLeft: 40,
        marginRight: 0, 
        width:290,
        height:180,
    },
    Text: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '10%'
    },
    background: {
        backgroundColor: '#FF6666',
        marginLeft: 20,
        marginRight: 20,
        margin: 3,
        borderRadius: 50,
    },

    container: { 
        flex: 1, 
        alignItems: 'center', 
        width: '100%', 
        height: '100%'
    },

});