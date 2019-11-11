import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Spinner } from "../components/Spinner";
import { ClassList } from "../components/ClassList";
import { LocationPicker } from "../components/LocationPicker";
import { DayPicker } from "../components/DayPicker";
import { GetClasses } from "../apis/gym";
import { mapClassData, getCurrentDay } from "../lib/helpers";

class MainView extends Component {
  state = {
    location: this.props.location,
    classes: this.props.classes,
    day: getCurrentDay(),
    isLoading: false
  };

  constructor(props) {
    super(props);
  }

  filterClasses() {
    const { classes, day } = this.state;

    return classes.filter(gymClass => day === gymClass.day);
  }

  classSearch(location) {
    this.setState({ location, isLoading: true });

    GetClasses({ location: location })
      .then(mapClassData)
      .then(classes => this.setState({ classes, isLoading: false }));
  }

  dayChanged(day) {
    this.setState({ day });
  }

  render() {
    const { isLoading } = this.state;

    if (!isLoading) {
      classList = <ClassList classes={this.filterClasses()} />;
    } else {
      classList = <Spinner />;
    }

    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.pickers}>
            <LocationPicker
              location={this.state.location}
              locationChange={itemValue => this.classSearch(itemValue)}
            />
            <DayPicker
              day={this.state.day}
              dayChange={itemValue => this.dayChanged(itemValue)}
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
    backgroundColor: "#fff"
  },
  pickers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MainView;
