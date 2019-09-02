import {
  Platform,
} from 'react-native';

export default MenuList = [
  {
    name: 'Home',
    route: 'Home',
    icon: Platform.OS === 'android' ? 'md-home' : 'ios-home',
    bg: '#C5F442'
  },
  {
    name: 'Logout',
    route: 'Login',
    component: null,
    icon: Platform.OS === 'android' ? 'md-exit' : 'ios-exit',
    bg: '#C5F442'
  },
];