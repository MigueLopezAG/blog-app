import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import Router from './src/Routes'

export default function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
