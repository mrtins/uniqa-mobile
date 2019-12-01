import {
  Platform,
} from 'react-native';

export default TabList = [
  {
    name: 'Home',
    routeName: 'Home',
    icon: Platform.OS === 'android' ? 'question-answer' : 'ios-home',
    iconType: 'MaterialIcons'
  },
  {
    name: 'Home',
    routeName: 'HomeScreen',
    icon: Platform.OS === 'android' ? 'group' : 'ios-home',
    iconType: 'MaterialIcons'
  },
  {
    name: 'Home',
    routeName: 'HomeScreen',
    icon: Platform.OS === 'android' ? 'notifications' : 'ios-home',
    iconType: 'MaterialIcons'
  },
  {
    name: 'Home',
    routeName: 'HomeScreen',
    icon: Platform.OS === 'android' ? 'menu' : 'ios-home',
    iconType: 'MaterialIcons'
  },
];