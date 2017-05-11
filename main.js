import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SimpleScroller from './simpleScroller'
import ScreenTwo from './screenTwo'
import ScreenOne from './screenOne'


class App extends React.Component {
  render() {
    return (
      <SimpleScroller
      screens={[
        <ScreenOne/>,
        <View style={{backgroundColor: 'red', flex: 1}}/>,
        <ScreenTwo/>
      ]}
       />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Expo.registerRootComponent(App);
