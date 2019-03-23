import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TextInput, Text } from 'react-native';

export default class PasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icEye: 'visibility-off',
      password: true
    }
  }
  changePwdType = () => {
    let newState;
    if (this.state.password) {
      newState = {
        icEye: 'visibility',
        password: false
      }
    } else {
      newState = {
        icEye: 'visibility-off',
        password: true
      }
    }
    // set new state value
    this.setState(newState)
  };
  render() {
    return (
      <View>
        <Text style={this.props.labelStyle}>Password</Text>
        <TextInput {...this.props} secureTextEntry={this.state.password}/>
        <Icon style={styles.icon}
          name={this.state.icEye}
          size={this.props.iconSize}
          color={this.props.iconColor}
          onPress={this.changePwdType}
        />
      </View>
    );
  }
}


export const styles = StyleSheet.create({

  icon: {
    position: 'absolute',
    top: 30,
    right: 0
  }

});

PasswordComponent.defaultProps = {
  iconSize: 25,
}