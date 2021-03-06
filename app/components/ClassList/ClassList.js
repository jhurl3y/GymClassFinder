import React, { Component } from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { GymListItem } from "./ListItem";

export class ClassList extends Component {
  constructor(props) {
    super(props);
  }

  renderListItem(item, index) {
    return <GymListItem index={index} item={item} />;
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.classes}
        renderItem={({ item, index }) => this.renderListItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
