import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default class ScreenOne extends React.Component {
  render() {
    return (
        <View styyle={styles.container}>
          <Text style={styles.stepText}>
            Step One:
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

