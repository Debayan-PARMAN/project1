import React, {Component} from 'react';
import store from './src/store/index';
import {Provider} from 'react-redux';
import AppContainer from './src/RouterContainer';
import { AppRegistry } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('project1', () => App);
