import React from 'react';
import { StyleSheet, Image, View} from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';

export default function App() {  
  return (
    <View style={styles.container}>
      <ViewImageScreen></ViewImageScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
