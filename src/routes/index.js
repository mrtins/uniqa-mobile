import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import Login from '../screens/public/Login';
import Loading from '../screens/public/Loading';

import MainStackNavigator from './MainStackNavigator';

const AuthNavigator = createStackNavigator({ Login: { screen: Login } });

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: MainStackNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Loading',
  }
);

export default Navigation = createAppContainer(SwitchNavigator);
