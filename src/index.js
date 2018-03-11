import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider, observer } from 'mobx-react/native';

import * as stores from './stores';
import Navigator from './navigator';

@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Navigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('SmartLibrary', () => App);
