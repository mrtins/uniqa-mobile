import {
  createStackNavigator,
} from 'react-navigation-stack';

// import DrawerNavigator from './DrawerNavigator';

import Home from '../screens/Home';
import Question from '../screens/Question';
import FormScreen from '../screens/FormScreen';

export default MainStackNavigator = createStackNavigator(
  {
    // Drawer: { screen: DrawerNavigator },

    Home: { name: 'Home', screen: Home },
    Question: { name: 'Question', screen: Question },
    FormScreen: { name: 'FormScreen', screen: FormScreen },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);