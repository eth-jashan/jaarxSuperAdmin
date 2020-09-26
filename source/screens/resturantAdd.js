import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignupForm from '../component/signUpForm'

const AddProfile = () => {
    return(
        
        <SafeAreaView>
        <ScrollView>
            <Text style={styles.titleStyle}>Restaurant Signup</Text>
            
            <SignupForm/>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    containertyle :{
        justifyContent : 'center'
    },
    titleStyle : {
        fontFamily:'medium', 
        fontSize:45,
        alignSelf:'center',
        margin:10
    }
})

AddProfile.navigationOptions = () => {
    return{
        header : ()=>{
            return false
        }
    }
}

export default AddProfile