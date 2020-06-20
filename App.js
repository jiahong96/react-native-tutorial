import React from 'react';
import { StyleSheet, View} from 'react-native';

import ListingDetailsScreen from './src/screens/ListingDetailsScreen';

export default function App() {  
  return (
    <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
