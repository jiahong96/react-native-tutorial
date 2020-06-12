import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View, SafeAreaView} from 'react-native';

import colors from '../constants/Colors';

const image = require('../assets/chair.jpg')

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}/>
      <View style={styles.greenBox}/>

      <Image source={image} resizeMode="contain" style={styles.image} />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  redBox: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  greenBox: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});