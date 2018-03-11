import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

@inject("auth")
@observer
export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>我的个人信息</Text>
        <Button type="primary" loading={true} onClick={() => this.props.auth.logout()} >退出</Button>
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
