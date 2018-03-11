import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button, WhiteSpace } from 'antd-mobile';

@inject("auth")
@observer
export default class HomeIndex extends Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    this.props.auth.login();
  }
  render() {
    console.log(this.props);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>首页</Text>
        <Button type="primary" onClick={() => navigation.goBack()} >返回</Button>
        <WhiteSpace size="sm" />
        <Button type="primary" onClick={() => navigation.navigate('LoginMobile')} >LoginMobile</Button>
        <WhiteSpace size="sm" />
        <Button type="primary" onClick={() => navigation.navigate('BindMobile')} >BindMobile</Button>
        <WhiteSpace size="sm" />
        <Button type="primary" onClick={() => navigation.navigate('ForgetPassword')} >ForgetPassword</Button>
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
