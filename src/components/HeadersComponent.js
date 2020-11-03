import React from 'react';
import {TextInput, Image, View} from 'react-native';

import pict from '../picture/Group1.png';
import styles from '../styles/styles';

const HeadersComponent = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Image style={styles.listButton} source={pict} />
      <View style={styles.spaceComponent} />
      <TextInput style={styles.searchInput} />
      <View style={styles.spaceComponent} />
      <Image
        source={{
          uri: 'https://img.icons8.com/pastel-glyph/2x/search.png',
          width: 40,
          height: 40,
        }}
      />
    </View>
  );
};
export default HeadersComponent;
