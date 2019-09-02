if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
/**
 * @format
 */

console.disableYellowBox = true;

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/App';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
