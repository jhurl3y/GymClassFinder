import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from '../components/Spinner';
import { ClassList } from '../components/ClassList';
import { LocationPicker } from '../components/LocationPicker';
import { DayPicker } from '../components/DayPicker';
import { GetClasses } from '../apis/gym';
import { mapClassData, filterByDay, getCurrentDay } from '../lib/helpers';


type Props = {};
class MainView extends Component<Props> {
    state = {
        location: this.props.location,
        classes: this.props.classes,
        day: this.props.day,
        isLoading: this.props.isLoading
    };

    constructor(props) {
        super(props);
    }

    classSearch() {
        const { location, day } = this.state;

        GetClasses(location)
            .then(mapClassData)
            .then(classes => filterByDay(classes, day))
            .then(classes => this.setState({ classes, isLoading: false }));
    }

    locationChanged(location) {
        this.setState({ location, isLoading: true});
        this.classSearch()
    }

    dayChanged(day) {
        this.setState({ day, isLoading: true});
        this.classSearch()
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
                    <View style={styles.pickers}>
                        <LocationPicker
                            location={this.state.location}
                            locationChange={(itemValue) => this.locationChanged(itemValue)}
                        />
                        <DayPicker
                            day={this.state.day}
                            dayChange={(itemValue) => this.dayChanged(itemValue)}
                        />
                    </View>
                    {classList}
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pickers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default MainView;
