import React, {Component} from 'react';
import {AppRegistry, View } from 'react-native';

import {LayoutStyles} from './styelsheets/MainStyle';
import Footer from './components/Footer/Footer';
import AppContainer from './RouterContainer';

export default class MainApp extends Component {
  render() {
    return (
      <View style={LayoutStyles.container}>
        <AppContainer />
      <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent(MainApp, () => MainApp);