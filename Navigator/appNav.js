import React from 'react';

//-------react navigation imports --------
import { createStackNavigator } from 'react-navigation-stack';
import {  createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

//------Screen Imports---------///
import AddProfile from '../source/screens/resturantAdd';
import MainScreen from '../source/screens/mainScreen';
import SettingScreen from '../source/screens/settingScreen'


//------icon imports--------
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SignInScreen from '../source/screens/signInScreen';

const StackNav = createStackNavigator({
    Home : MainScreen,
    Add : AddProfile
})

const BottomTab = createMaterialBottomTabNavigator({
    Home : { screen : StackNav, navigationOptions:{
        tabBarLabel : 'Lists',
        tabBarIcon : (tabInfo) => {
            return <Feather name="list" size={24} color={tabInfo.tintColor} />
        }
    }},
    Setting : {screen : SettingScreen, navigationOptions:{
        tabBarLabel : 'Setting',
        tabBarIcon : (tabInfo) => {
            return <Ionicons name="ios-settings" size={24} color={tabInfo.tintColor} />
        }
    } }
},{
    shifting : true,
    activeColor : '#009efd',
    barStyle : {backgroundColor:'white'}
})

const AppFlow = createSwitchNavigator({
    Auth : SignInScreen,
    Main : BottomTab
})

export default createAppContainer(AppFlow)


/// #009efd