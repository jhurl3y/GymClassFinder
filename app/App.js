import React, {Component} from 'react';
import MainView from './views/MainView';
import SplashView from './views/SplashView';
import { GetClasses } from './apis/gym';
import { mapClassData, filterByDay, getCurrentDay } from './lib/helpers';

type Props = {};
export default class App extends Component<Props> {
    state = {
        location: 'ballsbridge',
        classes: [],
        day: getCurrentDay(),
        isLoading: true
    };

    constructor(props) {
        super(props);
        this.classSearch();
    }

    classSearch() {
        const { location, day } = this.state;

        GetClasses(location)
            .then(mapClassData)
            .then(classes => filterByDay(classes, day))
            .then(classes => this.setState({ classes, isLoading: false }));
    }

    render() {
        const { classes, isLoading, location, day } = this.state;

        if (!isLoading) {
            return (
                <MainView
                    location={location}
                    classes={classes}
                    day={day}
                    isLoading={isLoading}
                />
            )
        } else {
            return <SplashView> </SplashView>
        }
    }
}
