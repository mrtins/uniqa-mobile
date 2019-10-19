import {
  createStackNavigator,
} from 'react-navigation-stack';

// import DrawerNavigator from './DrawerNavigator';

import Home from '../screens/Home';
import Question from '../screens/Question';

export default MainStackNavigator = createStackNavigator(
  {
    // Drawer: { screen: DrawerNavigator },

    Home: { name: 'Home', screen: Home },
    Question: { name: 'Question', screen: Question },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);