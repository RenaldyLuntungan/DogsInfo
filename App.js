import 'react-native-gesture-handler';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from './src/pages/HomePage';
import SubBreedsPage from './src/pages/SubBreedsPage';
import SideBar from './src/components/SideBar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{
            width: 40,
            height: 40,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'List All Breeds',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#2357b8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SubBreedsPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#2357b8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SubBreedsPage"
        component={SubBreedsPage}
        options={{
          title: 'List All Sub Breeds',
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#0f3c91',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen
          name="HomePage"
          options={{drawerLabel: 'List All Breeds'}}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SubBreedsPage"
          options={{drawerLabel: 'List All Sub Breeds'}}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
