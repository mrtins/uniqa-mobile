import {
  createStackNavigator,
} from 'react-navigation-stack';

// import DrawerNavigator from './DrawerNavigator';

import Home from '../screens/Home';

export default MainStackNavigator = createStackNavigator(
  {
    // Drawer: { screen: DrawerNavigator },

    Home: { name: 'Home', screen: Home },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);