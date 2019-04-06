
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Picker } from 'react-native';
import { getLocations } from '../../lib/helpers';

export class ClassPicker extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        const locations = getLocations();

        return (
            <Picker
                selectedValue={this.props.location}
                style={{height: this.props.height, width: this.props.width}}
                onValueChange={this.props.classChange}
            >
                {locations.map((location, index) => {
                    return (<Picker.Item label={location.label} value={location.value} key={index}/>) 
                })}
            </Picker>
        )
    }
}