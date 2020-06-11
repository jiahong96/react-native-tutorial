import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View} from 'react-native';

const bgImage = require('../assets/background.jpg');
const logoImage = require('../assets/logo-red.png');

export default function WelcomeScreen() {  
  return (
    <ImageBackground source={bgImage} style={styles.bgImage} >
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
        <Text> Sell What You Don't Need </Text>
      </View>
      
      <View style={{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
      }} />

      <View style={{
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4',
      }} />
    </ImageBackground> 
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  }
});