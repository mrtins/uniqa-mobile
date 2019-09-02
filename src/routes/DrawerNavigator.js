import React from 'react';

import {
  createDrawerNavigator,
} from 'react-navigation';

import SideBar from '../components/SideBar';

import Home from '../screens/Home';

export default DrawerNavigator = createDrawerNavigator(
  {
    Home: { name: 'Home', screen: Home },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />
  }
);