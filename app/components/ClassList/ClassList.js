/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

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

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
    },
    gymClass: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});