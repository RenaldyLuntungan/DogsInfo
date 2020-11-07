import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#f7f7f7',
  },
  HeaderContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  fontList: {
    fontSize: 20,
    fontWeight: '300',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f7f7f7',
  },

  viewList: {
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  searchInput: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'grey',
    width: 280,
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: '#f7f7f7',
  },
  spaceComponent: {
    paddingLeft: 15,
  },
  listButton: {
    height: 40,
    width: 40,
  },
  imageRandom: {
    width: 400,
    height: 200,
    borderRadius: 5,

    marginBottom: 10,
  },
  sideIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default styles;
