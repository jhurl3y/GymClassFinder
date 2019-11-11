import React, { Component } from "react";
import MainView from "./views/MainView";
import SplashView from "./views/SplashView";
import { GetClasses } from "./apis/gym";
import { mapClassData } from "./lib/helpers";

export default class App extends Component {
  state = {
    location: "ballsbridge",
    classes: [],
    isLoading: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    GetClasses({ location: this.state.location })
      .then(mapClassData)
      .then(classes => this.setState({ classes, isLoading: false }));
  }

  render() {
    const { isLoading, classes, location } = this.state;

    if (!isLoading) {
      return <MainView location={location} classes={classes} />;
    } else {
      return <SplashView> </SplashView>;
    }
  }
}
