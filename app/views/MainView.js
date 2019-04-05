/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import { GetClasses } from '../apis/gym';
import { massageClassData, filterByDay, filterEarlier, getCurrentDay } from '../lib/helpers';


type Props = {};
class MainView extends Component<Props> {
    state = {
        classes: [],
    };
    constructor(props) {
        super(props);
        this.classSearch('ballsbridge')
      }

    classSearch(location) { 
        GetClasses(location)
            .then(massageClassData)
            .then(classes => filterByDay(classes, getCurrentDay()))
            .then(filterEarlier)
            .then(classes => this.setState({ classes }));
    }

    render() {
        const { classes } = this.state;

        return (
            <FlatList style={styles.container}
                data={classes}
                renderItem={({item}) => <Text style={styles.gymClass}>{item.name}: {item.time}</Text>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: '#F5FCFF',
    },
    gymClass: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

export default MainView;
