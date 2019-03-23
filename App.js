import React, {Component} from 'react';
// import configureStore from './store';
import store from './src/store/index';
import {Provider} from 'react-redux';
import MainApp from './src/MainApp';

// const initialState = {};
// const store = configureStore(initialState);


  {/* <IntlProvider locale={localeData.locale} messages={localeData.messages}> */}
    // <MainApp />
  {/* </IntlProvider> */}
    
export default class App extends Component {
  componentDidMount(){
    console.log('Loading....')
  }

  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

