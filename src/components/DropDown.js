import React, { Component } from 'react';
import {Picker } from 'react-native';

export default class Drop_Down extends Component {
    render() {
        const { options, optionId, optionLabel, optionValue, selectedData} = this.props;
        return (
            <Picker
                selectedValue={this.props.selectedValue}
                mode='dropdown'
                onValueChange={(itemValue) => this.props.onValueChange(itemValue, selectedData)}>
                {
                    options.length > 0 ? options.map(option => 
                    <Picker.Item key={option[optionId]} 
                        label={option[optionLabel]} value={option[optionValue]} />
                    )
                    :
                    <Picker.Item label="No value" value="No value" />
                }
            </Picker>
        );
    }
}