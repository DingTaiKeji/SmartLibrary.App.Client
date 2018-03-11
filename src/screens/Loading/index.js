/**
 * 登陆检测
 * 更新检测
 * 网络检测
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'antd-mobile';
import authority from '../../utils/authority';


export default class Loading extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await authority.getToken();
    console.log(userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" text="加载中..." />
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