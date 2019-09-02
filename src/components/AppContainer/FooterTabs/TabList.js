import {
  Platform,
} from 'react-native';

export default TabList = [
  {
    name: 'Home',
    routeName: 'HomeScreen',
    icon: Platform.OS === 'android' ? 'md-home' : 'ios-home',
  },
  {
    name: 'Turmas',
    routeName: 'Turmas',
    icon: Platform.OS === 'android' ? 'md-contacts' : 'ios-contacts',
  },
  {
    name: 'Notas e Faltas',
    routeName: null,
    icon: Platform.OS === 'android' ? 'list-box' : 'list-box',
  },
  {
    name: 'Eventos',
    routeName: 'ListEventsScreen',
    icon: Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar',
  },
  {
    name: 'Financeiro',
    routeName: null,
    icon: Platform.OS === 'android' ? 'card' : 'card',
  },
  {
    name: 'Blackboard',
    routeName: null,
    icon: Platform.OS === 'android' ? 'md-clipboard' : 'ios-clipboard',
  },
];