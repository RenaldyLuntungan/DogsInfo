import React from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import dogAPI from '../picture/dogAPI.png';
import styles from '../styles/styles';
const SideBar = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={dogAPI} style={styles.sideIcon} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default SideBar;
