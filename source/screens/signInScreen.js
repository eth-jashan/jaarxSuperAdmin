import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import {useDispatch} from 'react-redux'
import * as authActions from '../../store/action/auth'

const SignInScreen = ({navigation}) => {

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)

    //sigin function=============
    const signInHandler = async() => {
        setLoad(true)
        await dispatch(authActions.signinProfile(email,password))
        setLoad(false)
        navigation.navigate('Main')
    }

    return(
    <View style = {styles.contaierStyle}>

    <Text style={styles.logo}>Jaarx</Text>
    <View style={styles.textInput}>
    <TextInput 
        mode = 'outlined'
        placeholder = 'Email'
        value = {email} 
        onChangeText = {(text) => setemail(text)}
        theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
        style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'90%', alignSelf:'center'}}
        autoCapitalize='none'
    />
    
    <TextInput
        mode = 'outlined'
        placeholder = 'Password'
        value = {password}
        onChangeText = {(text) => {setPassword(text)}}
        secureTextEntry
        theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
        style = {{fontFamily:'medium', color:'#009efd',height:60, width:'90%', alignSelf:'center'}}
    />
    </View>

    <TouchableOpacity onPress={signInHandler}>    
    <LinearGradient
        // Button Linear Gradient
        colors={['#009efd','#1aa8fd']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 5, width:'90%',alignSelf:'center' }}>
        {load?<ActivityIndicator color='white' size='small'/>:<Text style={{fontFamily:'medium',color:'white', fontSize:20}}>Sign In</Text>}
    </LinearGradient>
    </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({
    contaierStyle : {
        height : '100%',
        width : '100%',
        justifyContent:'flex-start',
        paddingTop:55
    },
    logo:{
        fontFamily : 'logo',
        fontSize : 80,
        color:'#009efd',
        alignSelf:'center'
    },
    textInput:{
        marginVertical : 30,
        alignContent :'center'
    }
})

export default SignInScreen