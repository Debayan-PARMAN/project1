import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class TextComponent extends Component {
  setFontType = type => {
    switch (type) {
      // case 'black':
      //   return 'OpenSans-Black';
      // case 'bold':
      //   return 'OpenSans-Bold';
      // case 'semi-bold':
      //   return 'OpenSans-SemiBold';
      // case 'medium':
      //   return 'OpenSans-Medium';
      default:
        return 'OpenSans-Regular';
    }
  };

  render() {
    const font = 'OpenSans-Regular';
    // const font = this.setFontType(this.props.type ? this.props.type : 'normal');
    const style = [{ fontFamily: font }, this.props.style || {}];
    const allProps = Object.assign({}, this.props, { style: style });
    return <Text {...allProps}>{this.props.children}</Text>;
  }
}
export default TextComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
