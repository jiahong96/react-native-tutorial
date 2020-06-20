import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

import colors from '../constants/Colors';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>

      <View style={styles.container}>
        <AppText style={styles.title}> Red Jacket for sales </AppText>
        <AppText style={styles.subTitle}> $100 </AppText>
        {/* <ListItem 
          image={require('../assets/jacket.jpg')}
          title="Mike Loo"
          subTitle="5 Listings"
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  container: {
    padding: 20
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',    
  }
})

export default ListingDetailsScreen;