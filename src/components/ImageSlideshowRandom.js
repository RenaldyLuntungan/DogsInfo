import React, {Component} from 'react';
import {View} from 'react-native';
import Slideshow from 'react-native-slideshow';

class ImageSlideshowRandom extends Component {
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
      <View>
        <Slideshow
          indicatorSize={10}
          height={250}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({position})}
        />
      </View>
    );
  }
}

export default ImageSlideshowRandom;
