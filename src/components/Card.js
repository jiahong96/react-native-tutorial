import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../constants/Colors';

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>

      <View style={styles.container}>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.subTitle}> {subTitle} </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200, 
  },
  container: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7,
  }
})

export default Card;