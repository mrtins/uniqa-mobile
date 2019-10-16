import {
  Platform,
} from 'react-native';

export default TabList = [
  {
    name: 'Home',
    routeName: 'HomeScreen',
    icon: Platform.OS === 'android' ? 'md-home' : 'ios-home',
  },
];