import React, {Component} from 'react';
// import configureStore from './store';
import store from './src/store/index';
import {Provider} from 'react-redux';
import AppContainer from './src/RouterContainer';

    
export default class App extends Component {
  componentDidMount(){
    console.log('Loading....')
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

