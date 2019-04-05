import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { getSplashLogo } from '../lib/assets';

type Props = {};
class SplashView extends Component<Props> {
    state = {
        isLoading: true
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={getSplashLogo()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashView;
