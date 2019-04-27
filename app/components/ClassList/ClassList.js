import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
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
                subtitle={item.time}
                containerStyle={{ borderColor: '#eee', borderBottomWidth: 1 }}
                wrapperStyle={{ borderColor: '#eee' }}
                leftAvatar={{ source: this.getIcon(item) }}
            />
        )
    }

    getIcon(item) {
        return getGymClassImage(item.slug);
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
