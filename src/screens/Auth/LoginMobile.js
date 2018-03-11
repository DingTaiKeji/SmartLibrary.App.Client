import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { StyleSheet, Text, View } from 'react-native';
import { InputItem, Button, WhiteSpace } from 'antd-mobile';

@inject("auth")
@observer
export default class LoginMobile extends Component {
  static navigationOptions = {
    title: '手机号登陆'
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <WhiteSpace size="lg" />
        <InputItem
          type={'phone'}
          placeholder="请输入手机号！"
          clear
          maxLength={50}
          labelNumber={4}
        >手机号</InputItem>
        <InputItem
          type={'number'}
          placeholder="请输入验证码！"
          clear
          maxLength={50}
          labelNumber={4}
          extra="获取"
        >验证码</InputItem>
        <WhiteSpace size="lg" />
        <Button type="primary" loading>登陆</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});