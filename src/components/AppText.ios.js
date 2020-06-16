import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = ({children}) => {
  return (
    <Text style={styles.text}> { children } </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'dodgerblue',
    fontSize: 60,
    fontFamily: 'Avenir'
  }
})

export default AppText;