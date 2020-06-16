import React from 'react';
import { StyleSheet, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './src/components/AppText';

export default function App() {  
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <AppText> I love React Native! </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
