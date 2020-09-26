import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Searchbar} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';


const MainScreen = ({navigation}) => {
    return(
        <View style={styles.cotainerStyle}>
        <SafeAreaView>
        <Searchbar
            placeholder = 'Search'
        />
        <View style={styles.add}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Add')}}>
        <LinearGradient
            colors={['#009efd','#1aa8fd']}
            style = {{height : 70, width:70, borderRadius : 40 ,alignItems:'center'}}
        >
          
        </LinearGradient>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainerStyle : {},
    add:{
        position : 'absolute',
        left : Dimensions.get('window').width-80,
        top : Dimensions.get('window').height-100

    }
})

MainScreen.navigationOptions = () => {
    return{
        header : ()=>{
            return false
        }
    }
}

export default MainScreen