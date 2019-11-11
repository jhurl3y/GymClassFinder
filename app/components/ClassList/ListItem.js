import React, { Component } from "react";
import { ListItem } from "react-native-elements";
import { styles } from "./styles";
import { getGymClassImage } from "../../lib/assets";

export class GymListItem extends Component {
  constructor(props) {
    super(props);
  }

  getIcon(item) {
    return getGymClassImage(item.slug);
  }

  getSubtitle(item) {
    return `${item.start}`;
  }

  getRightTitle(item) {
    return `${item.duration} mins`;
  }

  getRightSubtitle(item) {
    return `${item.area}`;
  }

  render() {
    return (
      <ListItem
        key={this.props.index}
        title={this.props.item.name}
        subtitle={this.getSubtitle(this.props.item)}
        rightTitle={this.getRightTitle(this.props.item)}
        rightSubtitle={this.getRightSubtitle(this.props.item)}
        containerStyle={styles.listItemContainer}
        wrapperStyle={styles.listItemWrapper}
        titleStyle={styles.title}
        rightTitleStyle={styles.rightTitle}
        rightSubtitleStyle={styles.rightSubtitle}
        leftAvatar={{ source: this.getIcon(this.props.item) }}
      />
    );
  }
}
