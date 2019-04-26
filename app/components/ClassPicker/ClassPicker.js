import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { getLocations } from '../../lib/helpers';
import { styles } from './styles';

export class ClassPicker extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        const locations = getLocations();

        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.props.location}
                    style={styles.dimensions}
                    onValueChange={this.props.classChange}
                >
                    {locations.map((location, index) => {
                        return (<Picker.Item label={location.label} value={location.value} key={index}/>) 
                    })}
                </Picker>
            </View>
        )
    }
}
