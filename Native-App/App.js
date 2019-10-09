// VENDOR
import React from 'react';
import { Text, View} from 'react-native';

// APP
import AppNavigator from './components/AppNavigator/AppNavigator'

/** This is the main component of the App */
export default function App() {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <AppNavigator />
    </View>
  );
}
