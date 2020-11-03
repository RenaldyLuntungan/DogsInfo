import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import HeadersComponent from './src/components/HeadersComponent';
import ListViewDogs from './src/components/ListViewDogs';
import ImageSlideshowRandom from './src/components/ImageSlideshowRandom';
import styles from './src/styles/styles';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <HeadersComponent />
          <ImageSlideshowRandom />
          <ListViewDogs />
        </View>
      </ScrollView>
    );
  }
}

export default App;
