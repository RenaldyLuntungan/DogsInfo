import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/styles';
import ImageSubBreedsRandom from '../components/ImageSubBreedsRandom';

const SubBreedsPage = props => {
  const [breeds, setBreeds] = useState({});

  axios.get('https://dog.ceo/api/breeds/list/all').then(({data}) => {
    const breedsObject = data.message;
    const breedKeys = Object.keys(breedsObject);
    const assembledBreedsObject = {};
    breedKeys.map(key => {
      if (breedsObject[key].length > 0) {
        breedsObject[key].forEach(subBreed => {
          assembledBreedsObject[key + '_' + subBreed] = key + '/' + subBreed;
        });
      }
    });

    setBreeds(assembledBreedsObject);
  });

  const {navigation} = props;
  return (
    <SafeAreaView
      style={{
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ImageSubBreedsRandom />
      <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#f7f7f7'}}>
        <FlatList
          style={styles.viewList}
          data={Object.keys(breeds)}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  padding: 10,
                }}>
                <Text style={styles.fontList}>{breeds[item]}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubBreedsPage;
