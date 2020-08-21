import React from 'react'
import { FlatList, View , Text, StyleSheet, Image} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress ={() => {
        navigation.navigate('Weather' , {zipCode: code})
    }}>
        <View style={styles.Text, styles.background}>
            <View style={styles.zipItem}>
                    <Text style={{ fontSize: 27, color: 'white' }}>{place}</Text>
                    <Text style={{ fontSize: 20, color: 'white' }}>{code}</Text>
            </View>
        </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: { 
        alignItems: 'center', 
        paddingTop: 10, 
        paddingBottom: 10,

        
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
        height: '100%' },
});