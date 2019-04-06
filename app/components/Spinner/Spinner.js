
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';

export const Spinner = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#333333" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 150,
  },
});