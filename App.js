import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, SafeAreaView} from 'react-native';
import axios from 'axios';
import Header from './components/header.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
   constructor(props) {
    super(props);
    this.state = {username: '',avatar: '', name : ''};
  }
  handleUsername = (username) => {
     this.setState({username})
     let Base_url = `https://api.github.com/users/rasikraj01`;
     axios.get(Base_url).then((res) => {this.setState({avatar: res.avatar_url, name:res.name}); }).catch((e) => {console.log(e);})
 }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
         <Header/>
         <TextInput
          style={{height: 40}}
          placeholder="Enter Your Github Username"
          onChangeText={this.handleUsername}
        />
        <Text>
        {this.state.username}
        </Text>
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
