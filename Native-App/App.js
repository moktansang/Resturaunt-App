// VENDOR
import React from 'react';
import { Text, View} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

// APP
import AppNavigator from './components/AppNavigator/AppNavigator'
import Checkout from './components/Checkout/Checkout'
import rootReducer from './reducers/reducer'

/** create redux store */
const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

/** This is the main component of the App */
export default function App() {
  return (
    <Provider store={reduxStore}> {/* wraps the application in redux */}
      <View style={{ height: '100%', width: '100%' }}>
        <Checkout />
        <AppNavigator />
      </View>
    </Provider>
  );
}
