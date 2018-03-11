import React from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom } from 'react-navigation';
import Loading from './screens/Loading'
import { LoginUsername, LoginMobile, BindMobile, ForgetPassword, Register } from './screens/Auth';
import { HomeIndex } from './screens/Home';
// import {  } from './screens/Trends';
import { MessageIndex, Chat } from './screens/Message';
import { MyInfo } from './screens/My';


// 账号登陆相关导航（未登陆）
const AuthStack = StackNavigator(
  {
    LoginUsername: LoginUsername,
    LoginMobile: LoginMobile,
    BindMobile: BindMobile,
    ForgetPassword: ForgetPassword,
    Register: Register
  },
  {
    initialRouteName: 'LoginUsername',
  }
);

// 首页导航
const HomeStack = StackNavigator(
  {
    HomeIndex: HomeIndex,
  },
  {
    initialRouteName: 'HomeIndex',
  }
);
// 动态导航
// 消息导航
const MessageStack = StackNavigator(
  {
    MessageIndex: MessageIndex,
    Chat: Chat,
  },
  {
    initialRouteName: 'ContactList',
  }
);

// 我的导航
const MyStack = StackNavigator(
  {
    MyInfo: MyInfo,
  },
  {
    initialRouteName: 'MyInfo',
  }
);

// App标签导航
const AppStack = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-school' : 'ios-school-outline'}
            size={32}
            color={focused ? '#33A3F4' : '#949494'}
          />
        ),
      }
    },
    Trends: {
      screen: MessageStack,
      navigationOptions: {
        tabBarLabel: '动态',
        tabBarIcon: ({ tintColor, focused }) => (
          <Text>1</Text>
        ),
      }
    },
    Message: {
      screen: MessageStack,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor, focused }) => (
          <Text>1</Text>
        ),
      }
    },
    My: {
      screen: MyStack,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Text>1</Text>
        ),
      }
    },
  },
  {
    tabBarComponent: TabBarBottom,
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: false, // 是否允许在标签之间滑动
    animationEnabled: true, // 改变标签时是否进行动画制作
    removeClippedSubviews: true, // 通过释放非活动选项卡使用的资源来减少内存使用量的优化
  }
);

// 认证导航
export default SwitchNavigator(
  {
    Loading: Loading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
);
