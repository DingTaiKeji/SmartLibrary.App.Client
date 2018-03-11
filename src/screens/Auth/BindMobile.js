import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BindMobile extends Component {
  static navigationOptions = {
    title: '绑定手机'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>绑定手机</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});