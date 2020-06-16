import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View} from 'react-native';

import AppButton from '../components/AppButton';

const bgImage = require('../assets/background.jpg');
const logoImage = require('../assets/logo-red.png');

export default function WelcomeScreen() {  
  return (
    <ImageBackground 
      blurRadius={3} 
      source={bgImage} 
      style={styles.bgImage} 
    >
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.tagline}> Sell What You Don't Need </Text>
      </View>
      
      <View style={styles.buttonsContainer} >
        <AppButton title="Login" onPress={() => console.log('login')}/>
        <AppButton title="Register" color="secondary" onPress={() => console.log('register')}/>
      </View>
    </ImageBackground> 
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },  
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
});