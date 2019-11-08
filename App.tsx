/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment,Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import Settings from './components/Settings';
// import Home from './components/Home';

// const AppNavigator = StackNavigator({
//   SettingScreen: { screen: Settings },
//   HomeScreen: { screen: Home }
// });

// export default class App extends Component {
//   render() {
//     return (
//       <AppNavigator />
//     );
//   }
// }

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <Text style={styles.welcome}>Hello World</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontFamily:'Cockin'
  }
});

// <Fragment>
//   <StatusBar barStyle="dark-content" />
//   <SafeAreaView>
//     <ScrollView
//       contentInsetAdjustmentBehavior="automatic"
//       style={styles.scrollView}>
//       <Header />
//       {global.HermesInternal == null ? null : (
//         <View style={styles.engine}>
//           <Text style={styles.footer}>Engine: Hermes</Text>
//         </View>
//       )}
//       <View style={styles.body}>
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Isthiaq Asif</Text>
//           <Text style={styles.sectionDescription}>
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Text>
//         </View>
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>See Your Changes</Text>
//           <Text style={styles.sectionDescription}>
//             <ReloadInstructions />
//           </Text>
//         </View>
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Debug</Text>
//           <Text style={styles.sectionDescription}>
//             <DebugInstructions />
//           </Text>
//         </View>
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Learn More</Text>
//           <Text style={styles.sectionDescription}>
//             Read the docs to discover what to do next:
//           </Text>
//         </View>
//         <LearnMoreLinks />
//       </View>
//     </ScrollView>
//   </SafeAreaView>
// </Fragment>

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

//export default App;
