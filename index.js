/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import Animation from './components/Animation';
import LayoutAnimation from './components/LayoutAnimation';
import RNElements from './components/RNElements';
//import Header_ from './components/Header_';
import MainApp from './MainApp';
import {name as appName} from './app.json';


//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Animation);
//AppRegistry.registerComponent(appName, () => LayoutAnimation);
//AppRegistry.registerComponent(appName, () => RNElements);
AppRegistry.registerComponent(appName, () => MainApp);
//AppRegistry.registerComponent(appName, () => Header_);