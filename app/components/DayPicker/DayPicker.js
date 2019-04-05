import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { getDays } from '../../lib/helpers';
import { styles } from './styles';

export class DayPicker extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        const days = getDays();

        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.props.day}
                    style={styles.dimensions}
                    onValueChange={this.props.dayChange}
                >
                    {days.map((day, index) => {
                        return (<Picker.Item label={day.label} value={day.value} key={index}/>)
                    })}
                </Picker>
            </View>
        )
    }
}
