import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { styles } from './styles';

export class ClassList extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList style={styles.container}
                data={this.props.classes}
                renderItem={({item}) => <Text style={styles.gymClass}>{item.name}: {item.time}</Text>}
            />
        )
    }
}
