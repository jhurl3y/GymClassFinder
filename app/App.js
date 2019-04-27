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

    render() {
        const { classes, isLoading, location } = this.state;

        if (!isLoading) {
            return (
                <MainView
                    location={location}
                    classes={classes}
                    isLoading={isLoading}
                />
            )
        } else {
            return <SplashView> </SplashView>
        }
    }
}
