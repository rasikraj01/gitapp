import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import Header from './components/header.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
         <Header/>
         </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#e3e3e3'
  }
});
