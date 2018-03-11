import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MessageIndex extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>聊天列表</Text>
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
