import React, {Component} from 'react';
import {View, Image} from 'react-native';
import axios from 'axios';
import styles from '../styles/styles';

export default class ImageSubBreedsRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: 'dummy',
    };
  }
  componentDidMount() {
    axios
      .get('https://dog.ceo/api/breed/terrier/images/random')
      .then(response => {
        this.setState({imageURL: response.data.message});
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {imageURL} = this.state;

    return (
      <View>
        <Image source={{uri: imageURL}} style={styles.imageRandom} />
      </View>
    );
  }
}
