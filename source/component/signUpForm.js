import React, { useState } from 'react'
import {StyleSheet, View, Text,TouchableOpacity,ActivityIndicator} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native-paper'
import {useDispatch} from 'react-redux'
import * as authOwnerAction from '../../store/action/authOwner'
import * as infoActions from '../../store/action/restaurantInfo'

const SignupForm = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [locality, setlocality] = useState('')

    const [mail, setMail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const[load, setLoad] = useState(false)
    const dispatch = useDispatch()

    const signUpHandler = async() => {
        setLoad(true)
        await dispatch(authOwnerAction.createProfile(mail, password2))
        await dispatch(infoActions.addProfile(name, city, locality,mail, first +" "+ last, number, email ))
        setLoad(false)
    }

    return(
        <View>
            <Text style={styles.headerStyle}>Owner/Manager Information</Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:10}}>
                <TextInput
                    mode = 'outlined'
                    placeholder = 'First Name'
                    value = {first}
                    onChangeText = {(text) => {setFirst(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'45%'}}
                />
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Last Name'
                    value = {last}
                    onChangeText = {(text) => {setLast(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'45%'}}
                />                
            </View>
            <View style={{flexDirection:'column',marginBottom:10,alignItems:'center'}}>
                <TextInput
                   mode = 'outlined'
                   placeholder = 'Phone Number'
                    value = {number}
                    onChangeText = {(text) => {setNumber(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Email'
                    value = {email}
                    onChangeText = {(text) => {setEmail(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />                
            </View>

            <Text style={styles.headerStyle}>Property Information</Text> 
            <View style={{marginTop:10, alignItems:'center'}}>
            <TextInput
                placeholder = 'Name Of Property'
                mode = 'outlined'
                value = {name}
                onChangeText = {(text) => {setName(text)}}
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
            />
            <TextInput
                placeholder = 'Adress of Property'
                multiline
                mode = 'outlined'
                value = {adress}
                onChangeText = {(text) => {setAdress(text)}}
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly',marginBottom:10}}>
                <TextInput
                    mode = 'outlined'
                    placeholder = 'City'
                    value = {city}
                    onChangeText = {(text) => {setCity(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'46%'}}
                />
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Sub-Locality'
                    value = {locality}
                    onChangeText = {(text) => {setlocality(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'46%'}}
                />
            </View>

            <Text style={styles.headerStyle}>Signup Credentials</Text>
            <View style={{marginTop:10, alignItems:'center'}}>
            <TextInput
                placeholder = 'Email Address'
                mode = 'outlined'
                value = {mail}
                onChangeText = {(text) => {setMail(text)}}
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly',marginBottom:10}}>
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Password'
                    value = {password1}
                    onChangeText = {(text) => {setPassword1(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'46%'}}
                />
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Re-Enter Password'
                    value = {password2}
                    onChangeText = {(text) => {setPassword2(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'46%'}}
                />
            </View>

            
                <View style={{marginTop:15, marginBottom:20}}>
                <TouchableOpacity onPress={signUpHandler}>    
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#009efd','#1aa8fd']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5, width:'90%',alignSelf:'center' }}>
                    {load?<ActivityIndicator color='white' size='small'/>:<Text style={{fontFamily:'medium',color:'white', fontSize:20}}>Create</Text>}
                </LinearGradient>
            </TouchableOpacity></View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle : {
        fontFamily : 'light',
        fontSize : 20,
        margin:10,
        alignSelf:'center'
    }
})

export default SignupForm