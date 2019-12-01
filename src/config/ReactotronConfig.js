import Reactotron, { asyncStorage } from 'reactotron-react-native'
import AsyncStorage from "@react-native-community/async-storage";

Reactotron
  .configure({ host: '192.168.58.1' }) // controls connection & communication settings
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .connect();