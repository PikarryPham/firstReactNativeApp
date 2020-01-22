/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//import Splash from './components/splash';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Image } from 'react-native';
class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'orange' }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    };
    return (
      <View style={viewStyles}>
        <Text style={textStyles}>
          Wait a second....
        </Text>
      </View>
    );
  }
}

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        4500
      )
    );
  }
  //một callback componentDidMount trong App component. Mục đích:
  /**
   *  sau thoi gian ở trên, sẽ tự động chuyển flag: isLoading = False
   */
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome To My First App
        </Text>
        <Text style={styles.intro}>
          Reload the App to see a splash screen
        </Text>
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
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  intro: {
    fontSize: 15,
    textAlign: 'center',
    color: '#dadada',
  },
  imgs: {
    width: '300px',
    height: '300px',
  }
});

//export default App;
