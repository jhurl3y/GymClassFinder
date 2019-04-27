import { Platform, StyleSheet } from 'react-native'
  
const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                alignItems: 'center',
            },
            android: {
                alignItems: 'flex-end'
            },
        }),
    },
    dimensions: {
        height: 100,
        width: 200
    }
});

export { styles }
