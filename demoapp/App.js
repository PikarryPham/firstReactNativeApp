import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/splash.android';

export default class HelloWorld extends Component {
  render() {
    let greeting = `Hi. How are you today?`
    return (
      <View>
        <Splash></Splash>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 700,
    height: 300
  },
});
