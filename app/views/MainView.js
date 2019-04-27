/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from '../components/Spinner';
import { ClassList } from '../components/ClassList';
import { ClassPicker } from '../components/ClassPicker';
import { GetClasses } from '../apis/gym';
import { mapClassData, filterByDay, getCurrentDay } from '../lib/helpers';


type Props = {};
class MainView extends Component<Props> {
    state = {
        location: 'ballsbridge',
        classes: [],
        isLoading: true
    };

    constructor(props) {
        super(props);
        this.classSearch(this.state.location)
    }

    classSearch(location) { 
        GetClasses(location)
            .then(mapClassData)
            .then(classes => filterByDay(classes, getCurrentDay()))
            .then(classes => this.setState({ classes, isLoading: false }));
    }

    locationChanged(location) {
        this.setState({ location: location, isLoading: true});
        this.classSearch(location)
    }

    render() {
        const { classes, isLoading } = this.state;

        if (!isLoading) {
            classList = <ClassList classes={classes}/>
        } else {
            classList = <Spinner />
        }

        return (
            <React.Fragment>
                <View style={styles.container}>
                    <ClassPicker
                        location={this.state.location}
                        classChange={(itemValue) => this.locationChanged(itemValue)}
                    />
                    {classList}
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default MainView;
