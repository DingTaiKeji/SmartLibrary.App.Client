import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
import { InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';

@inject("auth")
@observer
export default class LoginUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: ''
    };
  }
  static navigationOptions = {
    header: null
  };

  handleLoginClick = () => {
    if(this.props.auth.loading){
      return;
    }
    if('' === this.state.Username || '' == this.state.Password){
      Toast.info("用户名或密码不能为空！");
    }else{
      this.props.auth.login({
        Username: this.state.Username,
        Password: this.state.Password
      });
    }
  }

  onChangeInput(key, value){
    console.log(key,value);
    this.setState({
      [key]: value,
    })
  }

  render() {
    console.log(this.props);
    const { navigation, auth } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <InputItem
          type={'text'}
          placeholder="请输入借阅证号！"
          clear
          maxLength={50}
          labelNumber={3}
          onChange={value=>this.onChangeInput('Username',value)}
          value={this.state.Username}
        >账号</InputItem>
        <InputItem
          type={'password'}
          placeholder="请输入密码！"
          clear
          maxLength={50}
          labelNumber={3}
          onChange={value=>this.onChangeInput('Password',value)}
          value={this.state.Password}
        >密码</InputItem>
        <WhiteSpace size="lg" />
        <Button type="primary" loading={auth.loading} onClick={this.handleLoginClick} >登陆</Button>
        <WhiteSpace size="lg" />
        <View style={styles.linkGroup}>
          <Text style={styles.linkText} onPress={() => navigation.navigate('LoginMobile')} >手机号登录</Text>
          <Text style={styles.linkText} onPress={() => navigation.navigate('Register')} >校外注册</Text>
          <Text style={styles.linkText} onPress={() => navigation.navigate('ForgetPassword')} >忘记密码？</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  linkGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    fontSize: 16,
    color: '#1890FF'
  }
});
