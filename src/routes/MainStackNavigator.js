import {
  createStackNavigator,
} from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';

import Home from '../screens/Home';

export default MainStackNavigator = createStackNavigator(
  {
    Drawer: { screen: DrawerNavigator },

    Home: { name: 'Home', screen: Home },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  }
);