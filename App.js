import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppFlow from './Navigator/appNav'

//-----redux Setup-----//

import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

//====reducer======//

import AuthReducer from './store/reducer/auth'
import OwnerInfo from './store/reducer/authOwner'
import InfoReducer from './store/reducer/restaurantInfo'

//----- Font Uploads------
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
/* -----------------------------*/

//----- Custom Font Loading--------//
const fontLoading = () =>{
  return Font.loadAsync({
    'black':require('./assets/fonts/AirbnbCereal-Black.ttf'),
    'bold':require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    'book':require('./assets/fonts/AirbnbCereal-Book.ttf'),
    'extraBold':require('./assets/fonts/AirbnbCereal-ExtraBold.ttf'),
    'light':require('./assets/fonts/AirbnbCereal-Light.ttf'),
    'medium':require('./assets/fonts/AirbnbCereal-Medium.ttf'),
    'logo': require('./assets/fonts/Cocon-Regular-Font.otf')
  })
}

//-----redux store ---------//
const rootReducer = combineReducers({
  auth : AuthReducer,
  owner : OwnerInfo,
  info : InfoReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {

  const [fontLoad, setFontLoad] = useState(false)
  
    if(!fontLoad)
      {
        return <AppLoading
        startAsync ={fontLoading}
        onFinish = {() => setFontLoad(true)}
        /> 
      }


  return<Provider store = {store}><AppFlow/></Provider> 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
