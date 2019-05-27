import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from '../components/Spinner';
import { ClassList } from '../components/ClassList';
import { LocationPicker } from '../components/LocationPicker';
import { DayPicker } from '../components/DayPicker';


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

    filterClasses() {
        const { classes, location, day } = this.state;

        return classes
            .filter(gymClass => day === gymClass.day)
            .filter(gymClass => location === gymClass.location);
    }

    locationChanged(location) {
        this.setState({ location });
    }

    dayChanged(day) {
        this.setState({ day });
    }

    render() {
        const { isLoading } = this.state;

        if (!isLoading) {
            classList = <ClassList classes={this.filterClasses()}/>
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
