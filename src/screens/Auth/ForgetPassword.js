import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ForgetPassword extends Component {
  static navigationOptions = {
    title: '忘记密码'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>忘记密码</Text>
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