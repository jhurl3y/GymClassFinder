import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { styles } from './styles';
import { getGymClassImage } from '../../lib/assets';

export class ClassList extends Component<Props> {

    constructor(props) {
        super(props);
    }
    
    renderListItem(item, index) {
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={this.getSubtitle(item)}
                rightTitle={this.getRightTitle(item)}
                rightSubtitle={this.getRightSubtitle(item)}
                containerStyle={styles.listItemContainer}
                wrapperStyle={styles.listItemWrapper}
                titleStyle={styles.title}
                rightTitleStyle={styles.rightTitle}
                rightSubtitleStyle={styles.rightSubtitle}
                leftAvatar={{ source: this.getIcon(item) }}
            />
        )
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
        return `${item.area}`
    }

    render() {
        return (
            <FlatList style={styles.container}
                data={this.props.classes}
                renderItem={({item, index}) => this.renderListItem(item, index)}
            />
        )
    }
}
