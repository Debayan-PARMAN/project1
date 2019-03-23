import React, { Component } from 'react';
import {  Alert  } from 'react-native';

class AlertMessage extends Component{
    render(){
        // Default button
        // {
        //     text: 'Cancel',
        //     onPress: this.onCancelAlert,
        //     style: 'cancel'
        // }
        // console.log(this.props)
        const { title, message, buttonArray } = this.props;
        // console.log(message);
        return(
            Alert.alert(
                title,
                message,
                [
                    {
                    text: 'Cancel',
                    onPress: this.onCancelAlert,
                    style: 'cancel'
                }
                ], 
                {
                    cancelable: false
                }
            )
        );
    }
}
export default AlertMessage;