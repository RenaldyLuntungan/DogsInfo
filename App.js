import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Platform,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

import Slideshow from 'react-native-slideshow';
import pict from './Group1.png';

export default class App extends Component<{}> {
  constructor() {
    super();

    this.state = {
      position: 1,

      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'https://placeimg.com/640/480/any',
        },
        {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'https://placeimg.com/640/480/people',
        },
        {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'https://placeimg.com/640/480/people',
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 5000),
    });
  }

  UNSAFE_componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
            }}>
            <View style={{paddingLeft: 5}}></View>
            <Image style={{height: 50, width: 50}} source={pict} />
            <View style={{paddingLeft: 15}}></View>
            <TextInput
              style={{
                fontSize: 20,
                borderWidth: 2,
                borderColor: 'grey',
                width: 300,
                height: 50,
                paddingLeft: 20,
                paddingBottom: 20,
                borderRadius: 10,
              }}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/pastel-glyph/2x/search.png',
                width: 50,
                height: 50,
                position: 'absolute',
                top: 0,
                left: 20,
              }}
            />
          </View>

          <View>
            <Slideshow
              indicatorSize={10}
              style={{}}
              height={250}
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})}
            />
          </View>

          <View style={{paddingTop: 30, paddingHorizontal: 30}}>
            <Text style={styles.fontList}>African</Text>
            <Text style={styles.fontList}>Alaska</Text>
            <Text style={styles.fontList}>Greek</Text>
            <Text style={styles.fontList}>African</Text>
            <Text style={styles.fontList}>African</Text>
            <Text style={styles.fontList}>African</Text>
            <Text style={styles.fontList}>African</Text>
            <Text style={styles.fontList}>African</Text>
            <Text style={styles.fontList}>African</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  fontList: {
    fontSize: 20,
    fontWeight: '300',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
