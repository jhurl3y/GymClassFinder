import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

export const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#333333"
        style={styles.activityIndicator}
      />
    </View>
  );
};
