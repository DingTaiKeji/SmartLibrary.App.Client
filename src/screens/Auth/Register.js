import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BindMobile extends Component {
  static navigationOptions = {
    title: '校外注册'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>校外注册</Text>
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