import React, { Component } from 'react';
import {Text, StyleSheet ,StatusBar, View, Dimensions} from 'react-native';
class Header extends Component {
  render() {
    return (
      <View>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Text style={styles.header}>GitApp</Text>
      </View>
    );
  }
}
const Fwidth = Dimensions.get('window').width; //full width
const Fheight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
   header:{
      width: Fwidth,
      marginTop: 32,
      alignSelf: 'stretch',
      textAlign: 'center',
      lineHeight: 50,
      fontSize: 30,
      color: 'white',
      backgroundColor: 'steelblue'
   }
});

export default Header;
